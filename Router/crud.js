const express = require("express");
const models = require("../models/");
const router = express.Router();

const useDB = models.contents_table;

router.get("/select", (req, res) => {
    useDB.findAll().then((result) => {
        res.send(JSON.stringify(result, null, 4));
    });
});

router.get("/detailView/:id", (req, res) => {
    const id = req.params.id;

    useDB
        .findAll({ where: { id: id } })
        .then((result) => {
            res.send(JSON.stringify(result, null, 4));
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post("/create", (req, res) => {
    const body = req.body;

    console.log(req.body);

    useDB
        .create({
            user_id: body.user_id,
            nickname: body.nickname,
            contents: body.contents,
            title: body.title,
        })
        .then(() => {
            res.send({ success: true });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post("/update/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    useDB
        .update(
            {
                user_id: body.user_id,
                nickname: body.nickname,
                contents: body.contents,
                title: body.title,
            },
            { where: { id: id } }
        )
        .then(() => {
            res.send({ success: true });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post("/delete", (req, res) => {
    res.send("delete!");
});

module.exports = router;
