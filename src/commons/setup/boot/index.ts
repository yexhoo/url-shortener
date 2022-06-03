import * as Database from "../database";
import * as Environment from '../environment'
import * as Logger from '../../utils/logger';

export const init = async () => {
  Logger.info('Boot', 'Booting ...');
  Environment.init();
  Database.init();
};
