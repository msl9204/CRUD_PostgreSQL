const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const Sequelize = require("sequelize");

const app = express();
const port = 3000 || 3001;

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Sequelize
const sequelize = new Sequelize("express_post", "ms", "123456789", {
    host: "localhost",
    dialect: "postgres",
});

// Sequelize 접속 테스트
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
