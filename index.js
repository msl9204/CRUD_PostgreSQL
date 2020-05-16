const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
// Route
const route_root = require("./Router/root");
const route_crud = require("./Router/crud");

const port = 3000 || 3001;

// Log requests to the console.
app.use(logger("dev"));
app.use("/", route_root);
app.use("/crud", route_crud);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
