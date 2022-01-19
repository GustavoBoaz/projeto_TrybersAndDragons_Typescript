const ts = require('typescript');
const path = require('path');
const cp = require('child_process');
const fs = require('fs');

const FILES_FOLDER = path.join(__dirname, 'sources');

const PERMANENT_JS_FILES = [
  './jest.config.js',
  './tests/setup.js',
  './node_modules/*'
];

const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

afterAll(() => {
  let execString = "find . -type f -iname '*.js'";
  PERMANENT_JS_FILES.forEach((file) => { execString += ` -not -path '${file}'`; });
  execString += ' -delete';
  cp.execSync(execString);
});

expect.extend({
  toCompile(fileName, emit = true) {
    const filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], { maxNodeModuleJsDepth: 1, target: ts.ScriptTarget.ES2016, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeJs });
    const diagnostics = ts.getPreEmitDiagnostics(program);

    const errorDiagnostic = diagnostics.find(
      (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
    );

    if (errorDiagnostic) return {
      pass: false,
      message: () => `Expected ${fileName}.ts to compile successfully`,
    };

    if (emit) program.emit();

    return {
      pass: true,
      message: () => `Expected ${fileName}.ts to generate compile errors`,
    };
  },
  toCompileAndBeEqualTo(fileName, expected) {
    let filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], { maxNodeModuleJsDepth: 1, target: ts.ScriptTarget.ES2016, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeJs });

    program.emit();
    filePath = filePath.replace('.ts', '.js');

    const jsString = fs.readFileSync(filePath) + ' ; result();';
    const result = eval(replaceAll(jsString, '../../src', '../src'));

    return result === expected ? {
      pass: true,
      message: () => `Expected result of ${fileName}.js to be equal to ${expected}`,
    } : {
      pass: false,
      message: () => `Expected result of ${fileName}.js to be equal to ${expected} but got ${result}`,
    };
  },
});

