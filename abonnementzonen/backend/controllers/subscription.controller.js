const db = require("../models");
const Subscription = db.subscription;

const Op = db.Sequelize.Op;

// Create and save new subscription
exports.create = (req, res) => {
  //Validering
  if (!req.body.title) {
      res.status(400).send({
          message: "Du skal navngive din subscription!",
      });
      return;
  }
  if (!req.body.title) {
      res.status(400).send({
          message: "Du skal vælge en title til din subscription!",
      });
  }

  //Create a subscription
  const subscription = {
    title: req.body.title,
    startdate: req.body.startdate,
    category: req.body.category,
    image: req.body.image,
    subscriptionplan: req.body.subscriptionplan,
    user_id: req.body.user_id,
  };

  //Save subscription in db
  Subscription.create(subscription)
      .then((data) => {
          res.send(data);
      })
      .catch((err) => {
          res.status(500).send({
              message: err.message || "Desværre, du kunne ikke oprette en subscription...",
          });
      });
};

// Update a subscription profile by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Subscription.update(req.body, {
    where: { subscription_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "subscription was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update the subscription with id=${id}. Maybe the subscription was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating the subscription with id=" + id,
      });
    });
};


// Find a single subscription with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Subscription.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving subscription with id=" + id
      });
    });
};


// find all subscriptions
exports.findAll = (req, res) => {
  Subscription.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving the subscription."
    });
  });
};


// Delete a subscription with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Subscription.destroy({
    where: { subscription_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "subscription was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete subscription with id=${id}. Maybe the subscription was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete subscription with id=" + id,
      });
    });
};
