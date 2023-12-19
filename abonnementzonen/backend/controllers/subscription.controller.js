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
