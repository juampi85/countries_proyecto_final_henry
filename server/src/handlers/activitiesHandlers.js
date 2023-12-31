const { Activity, Country } = require('../db');
const { getAllActivities } = require('../controllers/activitiesControllers');
const {Op} = require('sequelize');

const getActivitiesHandler = async (req, res) => {
  try {
    const allActivities = await getAllActivities(req, res);
    res.status(200).json(allActivities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error en el servidor.' });
  }
};

const createActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const countryArray = countries.map((country) => country.trim());

    const countryRecords = await Country.findAll({
      where: {
        name: {
          [Op.or]: countryArray.map((country) => ({
            [Op.iLike]: `%${country}%`, //* Con esto consigo hacer una búsqueda que es insensible a mayúsculas y minúsculas
          })),
        },
      },
    });

    if (countryRecords.length === 0) {
      res
        .status(400)
        .json({ message: 'No se encontraron registros de esos paises' });
    }

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    await newActivity.addCountries(countryRecords);
    return res.status(201).json({ message: 'Actividad creada con exito' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'macana (Error interno del servidor)' });
  }
};

const deleteActivityHandler = async (req, res) => { 
  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(id);
    if (!activity) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }
    await activity.destroy(
      {where: 
        {id}
      }
    );
    const allActivities = await Activity.findAll(
      {include: {
        model: Country,
        attributes: ['id', 'name', 'continent'],
        through: {
          attributes: [],
        },
      },
      }
    );
    return res.status(200).json(allActivities);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = {
  getActivitiesHandler,
  createActivityHandler,
  deleteActivityHandler,
};