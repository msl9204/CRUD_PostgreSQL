const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
// Port
const port = 5000;

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log requests to the console.
app.use(logger("dev"));

// Route
const route_root = require("./Router/root");
const route_crud = require("./Router/crud");
app.use("/", route_root);
app.use("/crud", route_crud);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
