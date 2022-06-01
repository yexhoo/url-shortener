import * as Example from "./index";

describe('Example', () => {
  it('echo', () => {
    const msg = 'Hello';
    expect(Example.echo(msg)).toEqual(msg);
  });
});