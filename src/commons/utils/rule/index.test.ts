import { check } from "./index";
import { validate } from '../../../rules/shortcode/validator'
import { IData } from "../../../commons/interfaces/shortcode";

describe('Utils:Rule', () => {
  it('should return same data when does not exist validation errors', () => {
    const input = <IData>{ url: 'https://www.google.com'}
    const output = check(input, validate);
    expect(output).toMatchObject(input);
  });

  it('should return error when input data is not valid', () => {
    const input = <IData>{ url: '12345'}
    expect(() => {
      check(input, validate)
    }).toThrow('The url must be a valid link')
  });
});