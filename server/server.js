const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const app = express();

// API
const api = require("./routes/api");

// cors
app.use(cors());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API location
app.use("/api", api);

//Set Port
const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
