const db = require("../models");
const User = db.user;
const Subscription = db.subscription;

const Op = db.Sequelize.Op;

// Create and save a new user profile
exports.create = (req, res) => {
  if (!req.body.fname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Desværre, du kunne ikke oprette en bruger...",
      });
    });
};

// Update a User profile by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "user profile was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update the User profile with id=${id}. Maybe the user profile was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating the user profile with id=" + id,
      });
    });
};


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { user_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });

};

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id
      });
    });

};


// find all users
exports.findAll = (req, res) => {
  User.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving User."
    });
  });
};










//kode fra oliver, kevin, hidesh
exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving User.",
      });
    });
};
