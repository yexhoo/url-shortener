// eslint-disable-next-line @typescript-eslint/no-var-requires
const isUrlCheck = require("is-valid-http");

export const isValid = (url:string): boolean => isUrlCheck(url);
