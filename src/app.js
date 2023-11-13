const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    const response = await fetch("https://irarz.com/");
    const html = await response.text();
    res.send(html);
});

module.exports = app;
