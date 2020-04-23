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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// require routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// listen on port
app.listen(PORT, function(){
    console.log(`App listening on PORT ${PORT}`);
});