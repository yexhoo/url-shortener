import { generate } from 'randomstring';
import Utils from '../../constants/utils';

export const build = (): string => generate({
  length: Utils.RANDOM_CODE_LENGTH,
  charset: 'alphanumeric',
  capitalization: 'lowercase'
});
