const {
  getAllCountries,
  getCountryById,
} = require('../controllers/countriesControllers.js');

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const countries = await getAllCountries(name);
    if (countries.length === 0) {
      return res
        .status(404)
        .json({ message: 'No se encontraron países con esos criterios' });
    } else {
      return res.status(200).json(countries);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error en el servidor.' });
  }
};

const getCountryHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const countryById = await getCountryById(id);

    if (!countryById) {
      return res.status(404).json({ message: 'País no encontrado.' });
    }

    res.status(200).json(countryById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error en el servidor.' });
  }
};

module.exports = {
  getCountriesHandler,
  getCountryHandler,
};