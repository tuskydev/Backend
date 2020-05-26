const db = require("../database/dbConfig");

module.exports = {
    getAll,
    register,
    findBy,
    findByUsers,
}  

function getAll() {
    return db("users")
}

function register(user) {
    return db("users")
    .insert(user, "id")
    .then(id => {
        return findBy(id[0])
    })
}

function findBy(id) {
    return db("users")
    .where({ id })
}

function findByUsers(filter) {
    return db("users")
    .where(filter)
    .orderBy("id")
}