const express = require("express");
const models = require("../models/");
const router = express.Router();

const useDB = models.blog_content;

router.post("/create", (req, res) => {
    const body = req.body;

    console.log(req.body);

    useDB
        .create({
            user_id: body.user_id,
            password: body.password,
            user_nick: body.user_nick,
        })
        .then(() => {
            res.send({ success: true });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
