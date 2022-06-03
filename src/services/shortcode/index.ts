import { build } from '../../commons/utils/random'
import { IData } from '../../commons/interfaces/business';
import * as Repository from '../../repositories/shortcode'
import { IShortcode } from '../../commons/interfaces/models';

export const create = async (data : IData) : Promise<JSON> => {
  const { url } = data
  const code = build();
  const urlObject = new URL(url);
  const shortener = `${urlObject.protocol}//shortener.ly/${code}`
  await Repository.create(<IShortcode>{ code, url });
  return <IData> { url: shortener };  
};