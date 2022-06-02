export const check = (data:JSON, validateCallbackFunction:any): JSON => {
  const validations = validateCallbackFunction(data)

  if(Array.isArray(validations) && validations.length > 0) {
    throw validations[0];
  }

  return data;
}
