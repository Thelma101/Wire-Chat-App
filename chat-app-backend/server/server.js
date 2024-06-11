const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
    console.log("New client connected");

socket.on("disconnect", () => {
    console.log("Client disconnected");
});
socket.on("message", (message) => {
    console.log("New message: " + message);
    io.emit("message", message);
});
});

// mongoose.connect("mongodb://localhost:27017/chat-app", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log("MongoDB connected");
// })
// mongoose.connect('mongodb://localhost:27017/Tee', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb+srv://coursequesthub:fePziw-bewbaz-5cofme@cluster0.lssixvh.mongodb.net/wire-chat-app', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect("mongodb://cluster0.lssixvh.mongodb.net/wire-chat-app", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("MongoDB connected");
 })

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
