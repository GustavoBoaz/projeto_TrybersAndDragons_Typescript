declare namespace jest {
  interface Matchers<R> {
    toCompile(emit: boolean = true): R;
    toCompileAndBeEqualTo(expected): R;
    toBeInstanceOf(): R;
  }
}
