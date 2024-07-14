// src/components/Timer.js
import React from "react";
import './index.css'

const Timer = ({ time }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="timer">
      Time: {formatTime(time)}
    </div>
  );
};

export default Timer;
