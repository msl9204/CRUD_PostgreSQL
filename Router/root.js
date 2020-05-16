const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(
        "CRUD Main 화면 /crud/create /crud/select /crud/update /crud/delete"
    );
});
router.get("/about", (req, res) => {
    res.send("about");
});
module.exports = router;
