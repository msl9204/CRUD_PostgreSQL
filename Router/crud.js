const express = require("express");
const models = require("../models/");
const router = express.Router();

router.get("/select", (req, res) => {
    models.test_table.findAll().then((result) => {
        res.send(JSON.stringify(result, null, 4));
    });
});

router.get("/add", (req, res) => {
    res.send("add!");
});
router.get("/update", (req, res) => {
    res.send("update!");
});

router.get("/delete", (req, res) => {
    res.send("delete!");
});

module.exports = router;
