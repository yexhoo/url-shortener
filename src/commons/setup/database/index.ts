import * as Logger from '../../utils/logger';
import { Model, ModelStatic, Sequelize } from "sequelize";
import { getConnection } from '../../database/models';

let connection: Sequelize;

export function init() {
  if(!connection) {
    const db : any = getConnection();
    const { sequelize } : { sequelize: Sequelize} = db;
    connection = sequelize;
  }
}

export function getModel(model:string) : ModelStatic<Model> {
  init();
  return connection.models[model];
}

export async function check(): Promise<void> {
  try {
    await connection.authenticate();
    Logger.info('Database', 'Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}