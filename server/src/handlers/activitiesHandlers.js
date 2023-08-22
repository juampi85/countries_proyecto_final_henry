const { Activity, Country } = require('../db');
const {
  getAllActivities,
  createActivity,
} = require('../controllers/activitiesControllers');

const getActivitiesHandler = async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error en el servidor.' });
  }
};


const createActivityHandler = async (req, res) => {
  // const activityData = req.body;
  const { name, difficulty, duration, season, countryIds } = req.body;

  const result = await createActivity(
    name,
    difficulty,
    duration,
    season,
    countryIds
  );

  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    res.status(400).json({ error: result.error });
  }
};

module.exports = {
  getActivitiesHandler,
  createActivityHandler,
};
