const express = require("express"); 
// const cors = require('cors') //https://www.npmjs.com/package/cors CORS or Cross-Origin Resource Sharing in Node. js is a mechanism by which a front-end client can make requests for resources to an external back-end server
const bodyParser = require('body-parser') //To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser. https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

// app.use(cors());
const app = express();

const db = require("./models");

db.sequelize.sync();
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));



const routes = require("./routes/abonnementzonen.routes")
routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



app.get("/", (req, res) => {
  res.json({ message: "Welcome to abonnementzonen." });
});

