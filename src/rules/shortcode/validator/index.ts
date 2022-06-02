import { schema } from '../schema'
import Validator from 'fastest-validator';

const v = new Validator({
  useNewCustomCheckerFunction: true,
  messages: {
    urlLink: "The url must be a valid link."
  }
});
const check = v.compile(schema);

export const validate = (value: JSON) => check(value);