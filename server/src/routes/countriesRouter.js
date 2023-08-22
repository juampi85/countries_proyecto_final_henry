const { Router } = require('express');
const {
  getCountriesHandler,
  getCountryHandler,
} = require('../handlers/countriesHandlers');


const countriesRouter = Router();

//**************************************************/
//* los HANDLERS NUNCA deben interactuar con la BD */
//**************************************************/
//? Este es el handler:
//* (req, res) => {
//*   res.send('ESTA RUTA TRAE LA INFO DE TODOS LOS PAISES')
//* }

countriesRouter.get('/', getCountriesHandler);
countriesRouter.get('/:id', getCountryHandler);

module.exports = countriesRouter;