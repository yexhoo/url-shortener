import { build } from '../../commons/utils/random'
import { IData } from '../../commons/interfaces/business';
import * as Repository from '../../repositories/shortcode'
import { IShortcode } from '../../commons/interfaces/models';
import { getShorterLink } from '../../commons/utils/url'

export const create = async (data : IData) : Promise<JSON> => {
  const { url } = data
  const record = await Repository.findByUrl(url);

  if(!record) {
    const code = build();
    await Repository.create(<IShortcode>{ code, url });  
    return <IData> { url: getShorterLink(url, code) };    
  } 
  
  return <IData> { url: getShorterLink(url, record.code) };    
};