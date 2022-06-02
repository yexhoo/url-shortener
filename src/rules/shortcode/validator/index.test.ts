import { validate } from './index';
import { ValidationError } from 'fastest-validator';
import { getFirst } from '../../../commons/utils/collection';
import { IData } from '../../../commons/interfaces/shortcode';

describe('Validators::Shortcode', () => {
  let data: IData;
  let validations: true | ValidationError[] | Promise<true | ValidationError[]>;

  beforeEach(() => {
    data = <IData>{};
    validations = true;
  });

  it("should return error when url is null", () => {
    data = <IData>{};
    validations = <ValidationError[]>validate(data);
    expect(validations.length).toBeGreaterThanOrEqual(1);
    expect(getFirst(validations).message).toBe("The url must be a valid link.");
  });

  it("should return error when url is empty", () => {
    data = <IData>{ url: '' };
    validations = <ValidationError[]>validate(data);
    expect(validations.length).toBeGreaterThanOrEqual(1);
    expect(getFirst(validations).message).toBe("The url must be a valid link.");
  });

  it("should return error when url is invalid", () => {
    data = <IData>{ url: 'https://example' };
    validations = <ValidationError[]>validate(data);
    expect(validations.length).toBeGreaterThanOrEqual(1);
    expect(getFirst(validations).message).toBe("The url must be a valid link.");
  });
});
