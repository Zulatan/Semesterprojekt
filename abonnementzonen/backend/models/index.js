// https://sequelize.org/docs/v6/getting-started/
require("dotenv").config({ path: `.env.local`, override: true });
//refers to the library itself
const Sequelize = require("sequelize"); 
//refers to to an instance of Sequelize
const sequelize = new Sequelize("abonnementzonendb", "root", "", { 
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
  as: "subscriptions", // Note the change in alias                                   - changed
  onDelete: "cascade", // Delete all subscriptions if user is deleted 
});

// Define the relationship between Subscription and Payment
db.subscription.belongsTo(db.payment, {
  foreignKey: "payment_id", // Use payment_id as the foreign key in subscription  - changed
  as: "payment", // Singular alias since it's a one-to-one relationship            - changed
  onDelete: "cascade", // Delete payment if the associated subscription is deleted
});

// Define the relationship between Subscription and User
db.subscription.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user",
});

// Define the relationship between Payment and Subscription
db.payment.hasOne(db.subscription, {
  foreignKey: "payment_id", // Use payment_id as the foreign key in payment                 - changed
  as: "subscription",
});

module.exports = db;