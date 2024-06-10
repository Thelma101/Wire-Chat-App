const express = require("express");
const socket = require("socket.io");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("New client connected");
})

socket.on("disconnect", () => {
    console.log("Client disconnected");
})
socket.on("message", (message) => {
    console.log("New message: " + message);
    io.emit("message", message);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})