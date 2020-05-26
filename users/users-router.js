const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();
const Users = require("./users-model");
// IMPORT AUTHENTICATOR (MAYBE)

/*
.then(response => {
    res.status(200).json(response);
})
.catch(error => {
    res.status(500).json({ errorMessage: error });
})
*/

router.get("/", (req, res) => {
    Users.getAll()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: error });
    })
})

router.post("/register", (req, res) => {
    const user = req.body;
    const rounds = 8;

    const hash = bcryptjs.hashSync(user.password, rounds)
    user.password = hash;

    Users.register(user)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: error });
    })
})

router.post("/login", (req, res) => {
    const {username, password} = req.body;

    Users.findByUsers({username})
    .then(([response]) => {
        // Compare the password the hash stored in the databsae 
        if(response && bcryptjs.compareSync(password, response.password)) {
            const token = createToken(response);

            res.status(200).json({ message: "Welcome to our API", token });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    })
})

function createToken(user) {
    const payload = {
        sub: user.id,
        username: user.username,
    };

    const secret = "secretmysteryyouwillneverfind";

    const options = {
        expiresIn: "1d"
    };

    return jwt.sign(payload, secret, options)
}

module.exports = router;
