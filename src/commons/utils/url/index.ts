/* eslint-disable @typescript-eslint/no-var-requires */
import Utils from '../../constants/utils'
const isUrlCheck = require("is-valid-http");

export const isValid = (url:string) : boolean => isUrlCheck(url);

export const getShorterLink = (url:string, code: string) : string => {
  const urlObject = new URL(url);
  return `${urlObject.protocol}${Utils.SHORTENER_DOMAIN}${code}`
}