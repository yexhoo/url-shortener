import Codes from "./http/index";

describe('Constants', () => {
  it('Succes Http', () => {
    const entries = Object.entries(Codes);
    expect(Array.isArray(entries)).toBeTruthy();
    expect(entries[0][1]).toEqual(Codes.PORT);
    expect(entries[1][1]).toEqual(Codes.RUNNING_SERVER);
    expect(entries[2][1]).toEqual(Codes.OK);
    expect(entries[3][1]).toEqual(Codes.BAD_REQUEST);
  });
});