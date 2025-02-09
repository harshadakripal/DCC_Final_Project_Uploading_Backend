const express = require('express')
const bodyParser  = require('body-parser');
const cors = require("cors");
//const multer = require('multer');
const morgan = require('morgan');
const port = process.env.PORT || 8080;
const routes = require('./routes/routes');
require("dotenv").config();
const app = express();
//var upload = multer();


app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
// Cors
var corsOptions = {
        origin: ["http://18.118.208.14:${port}","http://localhost:3000"]
};
app.use(cors(corsOptions));
// End Cors configration
app.use(morgan('tiny'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// API Prefix
app.use("/api/v1", routes);

// Routes
app.get('/', (req, res) => {
    res.send('WorkersDeck Is Running')
});
app.listen(port, '0.0.0.0',() => {
    console.log(`WorkersDeck Started at http://localhost:${port}`)
})

module.exports = app;
