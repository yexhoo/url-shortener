import Codes from "./http/index";

describe('Constants', () => {
  it('Http', () => {
    const entries = Object.entries(Codes);
    expect(Array.isArray(entries)).toBeTruthy();
    expect(entries[0][1]).toEqual(Codes.PORT);
    expect(entries[1][1]).toEqual(Codes.RUNNING_SERVER);
  });
});