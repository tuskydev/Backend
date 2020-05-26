const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// ADD MIDDLEWARE REQUIRE IN THIS LINE!
const usersRouter = require("../users/users-router");
const postsRouter = require("../posts/posts-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/posts", /*ADD AUTHENTICATOR HERE */ postsRouter);

module.exports = server;
