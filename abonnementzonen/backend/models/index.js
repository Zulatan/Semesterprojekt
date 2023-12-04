// https://sequelize.org/docs/v6/getting-started/
require("dotenv").config({ path: `.env.local`, override: true });
//refers to the library itself
const Sequelize = require("sequelize"); 
//refers to to an instance of Sequelize
const sequelize = new Sequelize("abonnementzonendb", "root", "root", { 
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  password: process.env.SECRET,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.subscription = require("./subscription.model.js")(sequelize, Sequelize);

//relation between models (tables)
db.user.hasMany(db.subscription, {
    foreignKey: "user_id",
    as: "user",
    onDelete: "cascade", //delete all subscription if user is deleted
  });
  db.subscription.belongsTo(db.user, {
    foreignKey: "user_id",
    as: "user",
  });

module.exports = db;