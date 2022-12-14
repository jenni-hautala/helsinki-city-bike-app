// CORS configuration, Express REST Apis' initialization & run

// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = { origin: "http://localhost:8081" };
app.use(cors(corsOptions));

//------------------------------------------------
// Parse requests:
//------------------------------------------------
// Application/json
app.use(bodyParser.json());

// Application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connect
app.get("/", (req, res) => {
  res.json({ message: "Hello, this is bike application!" });
});

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
