import * as Environment from "./index";

describe('Environment', () => {
  test('init', async () => {
    Environment.init();
    Environment.all();
  });
});