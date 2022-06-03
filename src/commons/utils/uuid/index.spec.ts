import * as UUID from './index';

describe('Utils::UUID', () => {
  it('get', () => {
    const value = UUID.get();
    console.log(value);
    expect(UUID.isValid(value)).toBeTruthy();
  });

  it('isValid', () => {
    expect(UUID.isValid('')).toBeFalsy();
    expect(UUID.isValid('12345')).toBeFalsy();
    expect(UUID.isValid('abcde')).toBeFalsy();
    expect(UUID.isValid('da41d220-3d14-4313-8184-xxxxyyyyzzzz')).toBeFalsy();
  });
});

