import Http from "./http";
import Utils from "./utils";

describe('Constants', () => {
  it('Succes Http', () => {
    const entries = Object.entries(Http);
    expect(Array.isArray(entries)).toBeTruthy();
    expect(entries[0][1]).toEqual(Http.PORT);
    expect(entries[1][1]).toEqual(Http.RUNNING_SERVER);
    expect(entries[2][1]).toEqual(Http.OK);
    expect(entries[3][1]).toEqual(Http.BAD_REQUEST);
  });

  it('Succes Http', () => {
    const entries = Object.entries(Utils);
    expect(Array.isArray(entries)).toBeTruthy();
    expect(entries[0][1]).toEqual(Utils.RANDOM_CODE_LENGTH);
  });
});