require("dotenv").config();
const express = require("express");
const app = express(); // to configure the server
const mongoose = require("mongoose");

// connect to the database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error)); // if there's an error when connecting to db
db.once("open", () => console.log("Connected to the Database"));
app.listen(3000, () => console.log("Server is running"));
