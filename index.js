const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const models = require("./models/index.js");

const app = express();
const port = 3000 || 3001;

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Sequelize 접속 테스트

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
