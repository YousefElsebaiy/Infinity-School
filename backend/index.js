require("dotenv").config()
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json);
app.use(cors());

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected To DB")).catch(() => console.log("Faild TO Connect To Db"));

app.listen(PORT, () => console.log(`App Is Running on Port: ${PORT}`));