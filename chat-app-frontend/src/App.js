import React, { useEffect, useState } from 'react';
import './App.css';
import socketIoClient from 'socket.io-client';
import Chat from './components/Chat';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect (() => {
    socket.on("message", (message) => {
      // setMessages([...messages, message]);
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  });

  return (
    <div className="App">

      <Chat />

    </div>
  );
}

export default App;
