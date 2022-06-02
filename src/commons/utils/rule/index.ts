import { ValidationError } from "fastest-validator";

export const check = async (data:JSON, validateCallbackFunction:any): Promise<JSON> => {
  const validations = validateCallbackFunction(data)

  if(Array.isArray(validations) && validations.length > 0) {
    const msg = (<ValidationError> validations[0]).message;
    throw Error(msg);
  }

  return data;
}
