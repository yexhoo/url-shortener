import { IData } from '../../interface/shortcode';

export const create = async (data : IData) => {
  console.log('>>>>>>>>>> data: ', data);
  return data;  
};