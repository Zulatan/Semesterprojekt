const db = require("../models");
const Subscription = db.subscription;
const Payment = db.payment;

const Op = db.Sequelize.Op;

// Create and save new subscription with associated payment
exports.create = async (req, res) => {
  console.log(req.body);
  try {
    // Validation
    if (!req.body.title) {
      return res.status(400).send({ message: 'Du skal navngive din subscription!' });
    }

    if (!req.body.payment.price) {
      return res.status(400).send({ message: 'Du skal angive en pris for betalingen!' });
    }
    var date = new Date();
    // Create a payment
    const payment = {
      price: req.body.payment.price,
      nextpayment: date,
      cycle: req.body.payment.cycle,
    };
  // //Create a subscription
  // const subscription = {
  //   title: req.body.title,
  //   startdate: req.body.startdate,
  //   category: req.body.category,
  //   image: req.body.image,
  //   subscriptionplan: req.body.subscriptionplan,
  //   user_id: req.body.user_id,
  //   payment_id: req.body.payment_id
  // };

    // Save payment in the database
    const createdPayment = await Payment.create(payment);

    // Create a subscription
    const subscription = {
      title: req.body.title,
      startdate: req.body.startdate,
      category: req.body.category,
      image: req.body.image,
      subscriptionplan: req.body.subscriptionplan,
      user_id: req.body.user_id,
      payment_id: createdPayment.payment_id, // Link the subscription to the payment
    };

    // Save subscription in the database
    const createdSubscription = await Subscription.create(subscription);

    res.status(201).json(createdSubscription);
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  console.log(req.body)
  try {
    const subscription = await Subscription.findByPk(id);

    if (!subscription) {
      return res.status(404).send({
        message: `Subscription with id=${id} not found.`,
      });
    }

    let updatedSubscription;
    let updatedPayment;

    // Update the subscription
    await subscription.update(req.body);

    // Check if payment_id is present in the request body
    if (req.body.payment_id) {
      // Find the associated payment
      const payment = await Payment.findByPk(subscription.payment_id);

      if (!payment) {
        return res.status(404).send({
          message: `Payment with id=${subscription.payment_id} not found.`,
        });
      }

      // Update the payment
      updatedPayment = await payment.update(req.body.payment);
    }

    return res.send({
      message: "Subscription and associated payment were updated successfully!",
      updatedSubscription,
      updatedPayment,
    });
  } catch (error) {
    console.error('Error updating subscription and associated payment:', error);
    return res.status(500).send({
      message: `Error updating subscription with id=${id}`,
    });
  }
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
  Subscription.findAll({
    include: [{ model: Payment, as: 'payment' }]
  })
    .then(data => {
      console.log('Fetched data:', JSON.stringify(data, null, 2));
      res.send(data);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      res.status(500).send({
        message: "Error occurred while retrieving subscriptions with payment data."
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
