const server = require("./api/server");

const Port = 7000;

server.listen(Port, () => {
    console.log(`\n=== Server is listening on Port ${Port} ===\n`);
})

server.get("/", (req, res) => {
    res.json({ message: "Hello from /GET!" });
})