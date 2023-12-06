const express = require("express");
const app = express();
const cors = require("cors");

//configuration file
require("dotenv").config({ path: "config/config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());


// import db function from ./models/connection.js
const dbo = require("./models/connection.js");
 
app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
    console.log('Connected to database')
  });
  console.log(`Server is running on port: ${port}`);
});