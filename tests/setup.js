const ts = require('typescript');
const path = require('path');
const cp = require('child_process');

const FILES_FOLDER = path.join(__dirname, 'sources');

const PERMANENT_JS_FILES = [
  './jest.config.js',
  './tests/setup.js',
  './node_modules/*'
];

afterAll(() => {
  let execString = "find . -type f -iname '*.js'";
  PERMANENT_JS_FILES.forEach((file) => { execString += ` -not -path '${file}'`; });
  execString += ' -delete';
  cp.exec(execString);
});

expect.extend({
  toCompile(fileName, emit = true) {
    const filePath = path.join(FILES_FOLDER, `${fileName}`);

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
});

