import { isValid } from '../../../commons/utils/url'

export const schema = {
  url: {
    type: "string", default: '', custom: (v: any, errors: any) => {
      if (!isValid(v)) errors.push({ type: "urlLink" })
      return v;
    }
  }
}