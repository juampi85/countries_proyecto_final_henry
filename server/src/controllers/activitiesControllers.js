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

// const createActivity = async (activityData) => {
const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countryIds
) => {
  try {
    // const { name, difficulty, duration, season, countryIds } = activityData;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    const countries = await Country.findAll({
      where: {
        id: countryIds,
      },
    });

    await newActivity.addCountries(countries);

    return { success: true, message: 'Actividad creada exitosamente' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { getAllActivities, createActivity };
