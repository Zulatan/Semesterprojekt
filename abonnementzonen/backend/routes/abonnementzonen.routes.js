module.exports = (app) => {
  const user = require("../controllers/user.controller.js");
  const subscription = require("../controllers/subscription.controller.js");
  var router = require("express").Router();

  //User profil
  // Create a new user
  router.post("/users", user.create);

  // Retrieve all users
  router.get("/users", user.findAll);

  //to login
  router.post("/users/login", user.login)

  // Retrieve all published users
  router.get("/users/published", user.findAllPublished);

  // Retrieve a single user with id
  router.get("/users/:id", user.findOne);

  // Update a user with id
  router.put("/:id", user.update);

  // Delete a user with id
  router.delete("/:id", user.delete);

  // Create a new user
  router.delete("/", user.deleteAll);



  //subscription below

  // Create a new subscription
  router.post("/", subscription.create);

  // Retrieve all subscription
  router.get("/", subscription.findAll);

  // Retrieve all published subscription
  router.get("/published", subscription.findAllPublished);

  // Retrieve a single subscription with id
  router.get("/:id", subscription.findOne);

  // Update a subscription with id
  router.put("/:id", subscription.update);

  // Delete a subscription with id
  router.delete("/:id", subscription.delete);

  // Create a new subscription
  router.delete("/", subscription.deleteAll);

  app.use("/", router);
};






  // User routes
  router.post("/users", user.create);
  
  router.get("/users", user.findAll);
  router.post("/users/login", user.login);
  router.get("/users/published", user.findAllPublished);
  router.get("/users/:id", user.findOne);
  router.put("/users/:id", user.update);
  router.delete("/users/:id", user.delete);
  router.delete("/users", user.deleteAll);

  // Subscription routes
  router.post("/subscriptions", subscription.create);
  router.get("/subscriptions", subscription.findAll);
  router.get("/subscriptions/published", subscription.findAllPublished);
  router.get("/subscriptions/:id", subscription.findOne);
  router.put("/subscriptions/:id", subscription.update);
  router.delete("/subscriptions/:id", subscription.delete);
  router.delete("/subscriptions", subscription.deleteAll);

  // Mount the router on the specified path
  app.use("/api", router);