export const check = async (data:JSON, validateCallbackFunction:any): Promise<JSON> => {
  const validations = validateCallbackFunction(data)

  if(Array.isArray(validations) && validations.length > 0) {
    throw validations[0];
  }

  return data;
}
