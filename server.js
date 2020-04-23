//require npm packages: express, mongoose, and morgan
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// Set up Express app and create port
const app = express();
const PORT = process.env.PORT || 3000;

//morgan
app.use(morgan("dev"));

//express middleware for express set up andhandling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// db mongo - mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_j975k91k:ut1fuaspr58hij0jq1q49ga288@ds229118.mlab.com:29118/heroku_j975k91k", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// require routes
var htmlRoutes = require("./routes/htmlRoutes.js");
app.use(htmlRoutes);

var apiRoutes = require("./routes/apiRoutes.js");
app.use(apiRoutes);

// listen on port
app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
});