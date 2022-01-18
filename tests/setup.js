const ts = require('typescript');
const path = require('path');

const FILES_FOLDER = path.join(__dirname, 'sources');

expect.extend({
  toCompile(fileName) {
    const filePath = path.join(FILES_FOLDER, `${fileName}`);

    const program = ts.createProgram([filePath], { maxNodeModuleJsDepth: 1, target: ts.ScriptTarget.ES2016, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeJs });
    const diagnostics = ts.getPreEmitDiagnostics(program);

    const errorDiagnostic = diagnostics.find(
      (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
    );

    return errorDiagnostic
      ? {
        pass: false,
        message: () => `Expected ${fileName}.ts to compile successfully`,
      }
      : {
        pass: true,
        message: () => `Expected ${fileName}.ts to generate compile errors`,
      };
  },
});
