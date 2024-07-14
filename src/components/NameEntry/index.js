// src/components/NameEntry.js
import React, { useState } from "react";
import './index.css'

const NameEntry = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("playerName", name);
    onSubmit(name);
  };

  return (
    <div className="entry-div">
      <h1 className="head">React Tiles</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="head">Enter Your Name</h1>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
          required
          className="input-name"
        />
        <br/>
        <button type='submit' className="play-btn">Play Game</button>
      </form>
    </div>
  );
};

export default NameEntry;
