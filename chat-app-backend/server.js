// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");
// const mongoose = require("mongoose");

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// io.on("connection", (socket) => {
//     console.log("New client connected");

//     socket.on("disconnect", () => {
//         console.log("Client disconnected");
//     });

//     socket.on("message", (message) => {
//         console.log("New message: " + message);
//         io.emit("message", message);
//     });
// });

// const connectToDatabase = async () => {
//     try {
//         await mongoose.connect("mongodb://cluster0.lssixvh.mongodb.net/wire-chat-app");
//         console.log("MongoDB connected");
//     } catch (err) {
//         console.error("MongoDB connection error:", err);
//     }
// };

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// connectToDatabase();


const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
// const mongoose = require("mongoose");


const app = express();
const port = 4000;
const server = http.createServer(app);
const io = socketIo(server);


app.get('/', (req, res) => {
    res.sendFile(`__dirname + '/index.html'`)
});

app.listen(port, () => {
    console.log(`CONNECTED. Server is running on port ${port}`);
})