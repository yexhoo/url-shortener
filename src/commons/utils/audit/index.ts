import { get } from '../uuid'
import { IBaseModel } from '../../../commons/interfaces/models';

export const create  = (record: IBaseModel) : IBaseModel => {
  record.id = get();
  record.createdAt = new Date();
  record.updatedAt = new Date();
  return record;
}