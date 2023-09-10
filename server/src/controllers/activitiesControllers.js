const { Activity, Country } = require('../db');

const getAllActivities = async () => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ['id', 'name', 'continent'],
        through: {
          attributes: [],
        },
      },
    });
    return activities;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllActivities };