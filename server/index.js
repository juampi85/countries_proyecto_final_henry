//****************************************************************/
//? este módulo tiene la RESPONSABILIDAD de INICIAR la APLICACIÓN /
//****************************************************************/
const axios = require('axios');
const server = require('./src/server');
const { conn } = require('./src/db.js');
const PORT = 3001;
const { Country } = require('./src/db');


const startingServer = async () => {
  console.log('first')
  try {
    await conn.sync({ alter: true });
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

    const getAllCountries = (await axios.get('http://localhost:5000/countries')).data;
    
    const countriesAtDatabase = await getAllCountries.map(e => { 
      return {
        id: e.cca3,
        name: e.name.common,
        flag_img: e.flags.png,
        continent: e.continents[0],
        capital: e.capital ? e.capital[0] : 'No tiene capital',
        subregion: e.subregion,
        area: e.area,
        population: e.population
      }
    })

    await Country.bulkCreate(countriesAtDatabase);

  } catch (error) {
    console.log('Error locooooooooooooooo');
  }
}

startingServer();