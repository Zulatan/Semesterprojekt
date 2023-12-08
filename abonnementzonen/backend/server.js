const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

/*tilføjet som test*/
const subscriptionController = require('./controllers/subscription.controller');


const db = require("./models");

db.sequelize.sync();


// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));



require("./routes/abonnementzonen.routes")(app);
// require(".routes/user.routes")(app);
/* tilføjet som test linje under */
app.get("/api/subscription/all", subscriptionController.findAll);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});