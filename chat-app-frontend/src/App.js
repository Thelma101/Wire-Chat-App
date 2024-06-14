import React from ('react');
import './App.css';
import socketIoClient from 'socket.io-client';
import Chat from './Chat';

function App() {
  return (
    <div className="App">

      <Chat />

    </div>
  );
}

export default App;
