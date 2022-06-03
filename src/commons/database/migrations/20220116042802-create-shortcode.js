// eslint-disable-next-line @typescript-eslint/no-var-requires
const { TABLES } = require('../naming');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.SHORTCODE, {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true
      },
      code: {
        type: Sequelize.STRING(6),
        allowNull: false
      },
      url: {
        type: Sequelize.STRING(2048),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable(TABLES.SHORTCODE);
  }
};