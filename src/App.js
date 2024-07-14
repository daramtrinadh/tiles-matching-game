// src/App.js
import React, { useState } from "react";
import NameEntry from "./components/NameEntry";
import GameBoard from "./components/GameBoard";
import './App.css'

const App = () => {
  const [name, setName] = useState(localStorage.getItem("playerName") || "");

  return (
    <div className='App'>
      {!name ? <NameEntry onSubmit={setName} /> : <GameBoard />}
    </div>
  );
};

export default App;
