import { check } from "./index";
import { validate } from '../../../rules/shortcode/validator'
import { IData } from "../../../commons/interfaces/shortcode";

describe('Utils:Rule', () => {
  it('should return same data when does not exist validation errors', async () => {
    const input = <IData>{ url: 'https://www.google.com'}
    const output = await check(input, validate);
    expect(output).toMatchObject(input);
  });

  it('should return error when input data is not valid', async () => {
    const input = <IData>{ url: '12345'}
    expect(check(input, validate)).rejects.toThrow('The url must be a valid link');
  });
});