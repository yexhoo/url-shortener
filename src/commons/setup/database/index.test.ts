import * as Database from "./index";
import * as Environment from '../environment'

describe('Database', () => {
  it.skip('init', async () => {
    console.log('############################# <<<<<<<<<<<<<<<<<<<<<< ')
    Environment.init();
    Database.init();
    await Database.check();
  });
});