import { isValid } from '../../../commons/utils/url'

export const schema = {
  url: {
    type: "string", default: '', custom: (v: string, errors: Array<any>) => {
      if (!isValid(v)) errors.push({ type: "urlLink" })
      return v;
    }
  }
}