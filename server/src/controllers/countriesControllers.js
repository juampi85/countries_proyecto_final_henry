const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getAllCountries = async (name) => {
  try {
    //* acá hacemos una búsqueda pero SIN SER CASE SENSITIVE
    const whereCondition = name
      ? { name: { [Op.iLike]: `%${name}%` } } //* el "iLike" es CASE INsensitive
      : {};
    const countries = await Country.findAll({
      where: whereCondition,
      include: {
        model: Activity,
        attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
        through: {
          attributes: [],
        },
      },
    });
    return countries;
  } catch (error) {
    throw error;
  }
};

const getCountryById = async (id) => {
  try {
    // Obtener el país por su ID con todas las actividades asociadas
    const country = await Country.findByPk(id.toUpperCase(), {
      include: [
        {
          model: Activity,
          attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    return country;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCountries,
  getCountryById,
};
