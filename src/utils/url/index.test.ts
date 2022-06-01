import { isValid } from "./index";

describe('Utils:Url', () => {
  let urls:Array<string>;

  beforeEach(() => {
    urls = [];
  });

  it('Success test cases', () => {
    urls = [
      'https://example.com',
      'https://example.com/abc123',
      'http://example.com',
      'http://example.com/abc123',
      'https://localhost',
      'https://localhost/abc123',
      'http://localhost',
      'http://localhost/abc123',
    ]
    urls.forEach(url => { expect(isValid(url)).toBeTruthy();});
  });

  it('Invalid test cases', () => {
    const urls = [
      'example.com',
      'https://example',
      'ftp://example',
      'gopher://example',
      'notvalidurl',
    ];
    urls.forEach(url => { expect(isValid(url)).toBeFalsy();});
  });
});