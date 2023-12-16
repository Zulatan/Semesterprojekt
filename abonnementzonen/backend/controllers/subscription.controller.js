const db = require("../models");
const Subscription = db.subscription;
const Payment = db.payment; // Import the Payment model

const Op = db.Sequelize.Op;

// Create and save new Milestone
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
    payment_id: req.body.payment_id
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

exports.findAllWithPayments = (req, res) => {
  console.log('Inside findAllWithPayments'); // Add this
  Subscription.findAll({
    include: [{
      model: Payment,
      as: "payment",
    }],
  })
    .then(data => {
      console.log('Data from findAllWithPayments:', data); // Add this
      res.send(data);
    })
    .catch(err => {
      console.error('Error in findAllWithPayments:', err); // Log the error
      console.error(err);
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving subscriptions with payments.",
      });
    });
};

//Ny subscription og payment destroyer

// Delete a subscription with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  // Find the subscription with the specified id
  Subscription.findByPk(id)
    .then(subscription => {
      if (!subscription) {
        // Subscription not found
        res.status(404).send({
          message: `Subscription with id=${id} not found.`,
        });
        return;
      }

      // Delete the associated payment, if it exists
      if (subscription.payment_id) {
        Payment.destroy({
          where: { payment_id: subscription.payment_id }
        })
          .then(() => {
            console.log(`Payment with id=${subscription.payment_id} deleted.`);
          })
          .catch(err => {
            console.error('Error deleting payment:', err);
          });
      }

      // Now, delete the subscription
      Subscription.destroy({
        where: { subscription_id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Subscription and associated payment were deleted successfully!"
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
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving subscription with id=" + id
      });
    });
};
