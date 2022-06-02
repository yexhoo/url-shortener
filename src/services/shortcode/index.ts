import { build } from '../../commons/utils/random'
import { IData } from '../../commons/interfaces/shortcode';

export const create = async (data : IData) : Promise<JSON> => {
  const urlObject = new URL(data.url);
  const url = `${urlObject.protocol}//shortener.ly/${build()}`
  return <IData> { url };  
};