const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();

const router = require("./routes/index");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use("/", router);
app.listen(3000);
{
  console.log("server is running");
}
