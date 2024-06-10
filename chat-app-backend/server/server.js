const express = require("express");
const socket = require("socket.io");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})