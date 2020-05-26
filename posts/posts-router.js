const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();
// const Posts = require("./posts-model");
// IMPORT AUTHENTICATOR

router.get("/", (req, res) => {
    res.status(200).json({ message: "/GET from POSTS!" });
})

module.exports = router;
