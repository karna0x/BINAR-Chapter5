const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

let users = require("../database/users.json");


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post("/api/v1/login", (req, res) => {
    const login = req.body;
    console.log(login);
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (login.email === element.email && login.password === element.password) {
            res.status(200);
            res.redirect("/game");
        } else if (
            login.email != element.email ||
            login.password != element.password
        ) {
            res.status(401);
            res.send("incorrent email or password");
        }

    }
});
module.exports = router;
