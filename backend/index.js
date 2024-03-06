const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const SECRET = process.env.JWT_SECRET;
const mainRoute = require('./routes/index');

app.use("/api/v1",mainRoute);

app.listen(3000);