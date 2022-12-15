// Sequalize data model
// const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Trip = sequelize.define("trip", {
    departureTime: {
      type: Sequelize.DATE,
    },
    returnTime: {
      type: Sequelize.DATE,
    },
    departureStationId: {
      type: Sequelize.INTEGER,
    },
    departureStationName: {
      type: Sequelize.STRING,
    },
    returnStationId: {
      type: Sequelize.INTEGER,
    },
    returnStationName: {
      type: Sequelize.STRING,
    },
    coveredDistanceM: {
      type: Sequelize.INTEGER,
    },
    durationSec: {
      type: Sequelize.INTEGER,
    },
  });

  return Trip;
};
