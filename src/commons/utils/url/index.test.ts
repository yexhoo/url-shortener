import { isValid, getShorterLink } from "./index";
import Utils from '../../constants/utils'

describe('Utils:Url', () => {
  let urls:Array<string>;

  beforeEach(() => {
    urls = [];
  });

  it('Should return true for valid test cases', () => {
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

  it('Should return false for invalid test cases', () => {
    const urls = [
      'example.com',
      'https://example',
      'ftp://example',
      'gopher://example',
      'notvalidurl',
    ];
    urls.forEach(url => { expect(isValid(url)).toBeFalsy();});
  });

  it('shouild return valid shortener link', () => {
    const code = '12345'
    const protocol = 'https:'
    const domain = '//www.google.com'
    const link = `${protocol}${domain}`;
    const shorterLink = getShorterLink(link, code);
    expect(shorterLink).toEqual(`${protocol}${Utils.SHORTENER_DOMAIN}${code}`)
  });
});