import * as Algo from '../src';

describe('Aloha', function () {
  it('Exists', () => {
    const x = new Algo.Aloha();
  });
  it('É instancia de Aloha', () => {
    const x = new Algo.Aloha();
    expect(x instanceof Algo.Aloha).toBe(true);
  });
});
