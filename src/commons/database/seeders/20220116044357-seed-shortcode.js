/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { TABLES } = require('../naming');
const data = require("./data/1-shortcode.json"); 

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(TABLES.SHORTCODE, data);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(TABLES.SHORTCODE, null, {});
  }
};