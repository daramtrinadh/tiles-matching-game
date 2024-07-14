// src/components/Tile.js
import React from "react";
import './index.css'

const Tile = ({ value, isFlipped, onClick }) => {
  return (
    <div className='tile' onClick={onClick}>
      {isFlipped ? value : "❓"}
    </div>
  );
};

export default Tile;
