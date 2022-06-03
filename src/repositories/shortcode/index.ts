import * as DB from '../../commons/setup/database'
import { TABLES } from '../../commons/database/naming'
import * as Audit from '../../commons/utils/audit'
import { IShortcode } from '../../commons/interfaces/models';

export const create = async (shortCode : IShortcode) : Promise<void> => {
  await DB.getModel(TABLES.SHORTCODE).create(Audit.create(shortCode));
};

export const findByUrl = async (url : string) : Promise<IShortcode> => {
  const  record = await DB.getModel(TABLES.SHORTCODE).findOne({ raw: true, where: { url } })
  return <IShortcode>record;
};

export const findByCode = async (code : string) : Promise<IShortcode> => {
  const  record = await DB.getModel(TABLES.SHORTCODE).findOne({ raw: true, where: { code } })
  return <IShortcode>record;
};