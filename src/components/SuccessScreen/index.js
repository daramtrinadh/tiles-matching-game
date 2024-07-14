// src/components/SuccessScreen.js
import React from "react";
import Timer from "../Timer"
import './index.css'

const SuccessScreen = ({ score, time }) => {
    const handlePlayAgain = () => {
      window.location.reload();
    };
  return (
    <div className='success-screen'>
      <h1>Game Finished!</h1>
      <p className={score < 0 ? "red" : "green"}>Score :{score}</p>
      <p className='time'>
        <Timer time={time} />
      </p>
      <button onClick={handlePlayAgain} className='play-again'>
        Play Again
      </button>
    </div>
  );
};

export default SuccessScreen;
