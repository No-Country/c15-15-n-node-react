require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Host, Port, User, Password, Databasename } = process.env;

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: Host,
  port: Port,
  username: User,
  password: Password,
  database: Databasename,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  // ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
