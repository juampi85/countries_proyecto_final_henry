require('dotenv').config();
const { Sequelize } = require('sequelize');
const CountryModel = require('./models/Country');
const ActivityModel = require('./models/Activity');

const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false, //* esta partecita es para que, en la consola, NO se llene de info sobre cada proceso que hace el Sequelize
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

CountryModel(sequelize); //* envío a SEQUELIZE hacia el MODEL de Country
ActivityModel(sequelize); //* envío a SEQUELIZE hacia el MODEL de Activity

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones (muchos a muchos, según el README)
Country.belongsToMany(Activity, { through: 'country_activity' });
Activity.belongsToMany(Country, { through: 'country_activity' });

module.exports = {
  ...sequelize.models, //* para poder importar los modelos así: const { Country, Activity } = require('./db.js');
  conn: sequelize, //* para importar la conexión { conn } = require('./src/db.js');
};