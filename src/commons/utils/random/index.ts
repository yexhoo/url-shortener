import { generate } from 'randomstring'

export const build = (): string => generate({
  length: 6,
  charset: 'alphanumeric',
  capitalization: 'lowercase'
});
