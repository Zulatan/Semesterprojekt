const db = require("../models");
const Payment = db.payment;

const Op = db.Sequelize.Op;



exports.create = (req, res) => {
  //Validering
  if (!req.body.price) {
      res.status(400).send({
          message: "Du skal navngive din payment",
      });
      return;
  }
  if (!req.body.price) {
      res.status(400).send({
          message: "Du skal vælge en title til din payment",
      });
  }

//Create a payment
const payment = {
  price: req.body.price,
  nextpayment: req.body.nextpayment,
  cycle: req.body.cycle,
  subscription_id: req.body.subscription_id
};


  //Save payment in db
  Payment.create(payment)
      .then((data) => {
          res.send(data);
      })
      .catch((err) => {
          res.status(500).send({
              message: err.message || "Desværre, du kunne ikke oprette en payment...",
          });
      });
};


// find all payments
exports.findAll = (req, res) => {
  Payment.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving the payment."
    });
  });
};

// Delete a payment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Payment.destroy({
    where: { payment_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "payment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete payment with id=${id}. Maybe the payment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete payment with id=" + id,
      });
    });
};


// Update a payment by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Payment.update(req.body, {
    where: { payment_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "payment was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update the payment with id=${id}. Maybe the payment was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating the payment with id=" + id,
      });
    });
};