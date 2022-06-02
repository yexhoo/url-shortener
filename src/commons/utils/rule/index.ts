export const check = (data:any, validateCallbackFunction:any): any => {
  const validations = validateCallbackFunction(data)

  if(Array.isArray(validations) && validations.length > 0) {
    throw validations[0];
  }

  return data;
}
