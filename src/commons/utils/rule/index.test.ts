import { check } from "./index";
import { validate } from '../../../rules/shortcode/validator'
import { IData } from "../../interfaces/business";

describe('Utils:Rule', () => {
  it('should return same data when does not exist validation errors', async () => {
    const input = <IData>{ url: 'https://www.google.com'}
    const output = await check(input, validate);
    expect(output).toMatchObject(input);
  });

  it('should return error when input data is not valid', async () => {
    const input = <IData>{ url: '12345'}
    expect(check(input, validate)).rejects.toThrowError('The url must be a valid link');
  });
});