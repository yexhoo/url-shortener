import { v4, validate } from 'uuid';

export const get = () => v4();
export const isValid = (value: string) => validate(value);