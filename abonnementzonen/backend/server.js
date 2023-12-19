const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

/*tilføjet som test*/
const subscriptionController = require('./controllers/subscription.controller');


const db = require("./models");

db.sequelize.sync();
console.log('Database synchronized');


// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));



require("./routes/abonnementzonen.routes")(app);
/* tilføjet som test linje under */
app.get("/api/subscription/all", subscriptionController.findAll);

// For some reason, when commenting out the code below it still fetches the data.
app.get("/api/subscription/all-with-payments", subscriptionController.findAllWithPayments);

app.put("/api/subscription/:id", subscriptionController.update);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});