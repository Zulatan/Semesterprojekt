module.exports = (app) => {
  const user = require("../controllers/user.controller.js");
  const subscription = require("../controllers/subscription.controller.js");
  const payment = require("../controllers/payment.controller.js");

  var router = require("express").Router();

  //for users below
  //create a new user
  router.post("/user", user.create);

  //login med user
  router.post("/login", user.login);

  //delete a user with an id as param
  router.delete("/user/:id", user.delete);

  //update a user with an id as param
  router.put("/user/:id", user.update);

  //find a single user with id as param
  router.get("/user/:id", user.findOne);

  //find all users
  router.get("/users", user.findAll);

  //test
  router.get("/subscription/all-with-payments", subscription.findAllWithPayments);

  //for subscriptions below
  //create a subscription
  router.post("/subscription", subscription.create);

  //delete a subscription
  router.delete("/subscription/:id", subscription.delete);

  router.put("/subscription/:id", subscription.update);

  // //update a subscription with an id as param
  // router.put("/subscriotion/:id", subscription.update)

  //find a single sub with id as param
  router.get("/subscription/:id", subscription.findOne);

  //find all subscriptions
  router.get("/subscription", subscription.findAll);

  // For payments below
  //create a payment
  router.post("/payment", payment.create);

  // find all payments
  router.get("/payment", payment.findAll);

  //update a payment
  router.put("/payment/:id", payment.update);
  
  //delete a payment
  router.delete("/payment/:id", payment.delete);

  app.use("/api", router);
};
