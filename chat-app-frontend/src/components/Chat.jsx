const React = require("react");
const socket = require("socket.io-client");
const http = require("http");

const Chat = () => {
    const [messages, setMessages] = React.useState([]);
    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}