import { IData } from '../../commons/interfaces/shortcode';

export const create = async (data : IData) => {
  console.log('data: ', data);
  return data;  
};