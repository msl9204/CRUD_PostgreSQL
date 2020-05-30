const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
// Port
const port = 5000;

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

// Log requests to the console.
app.use(logger("dev"));

// Route
const route_root = require("./Router/root");
const route_crud = require("./Router/crud");
const route_users = require("./Router/users");
const route_post = require("./Router/post");

app.use("/", route_root);
app.use("/crud", route_crud);
app.use("/users", route_users);
app.use("/post", route_post);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
