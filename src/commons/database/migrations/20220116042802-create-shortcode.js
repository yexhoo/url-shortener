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
        type: Sequelize.STRING(8),
        unique: true,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING(300),
        unique: true,
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
    await queryInterface.addIndex(TABLES.SHORTCODE, ['url']);
    await queryInterface.addIndex(TABLES.SHORTCODE, ['code']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable(TABLES.SHORTCODE);
  }
};