import { TABLES } from '../../commons/database/naming'
import * as Database from '../../commons/setup/database'
import { IShortcode } from '../../commons/interfaces/models';
import * as Audit from '../../commons/utils/audit'

export const create = async (shortCode : IShortcode) : Promise<void> => {
  const shortcodes = Database.getModel(TABLES.SHORTCODE);
  await shortcodes.create(Audit.create(shortCode));
};