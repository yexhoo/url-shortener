import { build } from '../../commons/utils/random'
import { getShorterLink } from '../../commons/utils/url'
import { IData } from '../../commons/interfaces/business';
import * as Repository from '../../repositories/shortcode'
import { IShortcode } from '../../commons/interfaces/models';

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

export const get = async (code:string | undefined = '') : Promise<JSON> => {
  const record = await Repository.findByCode(code);
  if(!record) throw Error('Url not found')
  const { url } = record;
  return <IData> { url };
};