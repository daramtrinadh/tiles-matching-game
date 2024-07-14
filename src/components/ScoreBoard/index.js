// src/components/ScoreBoard.js
import React from "react";
import './index.css'

const ScoreBoard = ({ score }) => {
  return <div className='score-board'>Score: <span className={score<0?"red":"green"}>{score}</span></div>;
};

export default ScoreBoard;
