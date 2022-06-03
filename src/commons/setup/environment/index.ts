import dotenv from 'dotenv'
import * as Logger from '../../utils/logger'

export const init = () => {
  Logger.info('Environment', 'Initializing environment variables');
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
};

export const all = () => {
  Logger.info( `DB_PATH: ${process.env.DB_PATH}`)
};