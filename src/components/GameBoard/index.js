import React, { useState, useEffect } from "react";
import Tile from "../Tile";
import ScoreBoard from "../ScoreBoard";
import Timer from "../Timer";
import SuccessScreen from "../SuccessScreen";
import "./index.css";

const playername = localStorage.getItem("playerName");

const createTiles = () => {
  const tileValues = [
    "🍎",
    "🍌",
    "🍒",
    "🍇",
    "🍉",
    "🍓",
    "🍍",
    "🥝",
    "🍋",
    "🍊",
  ];
  const tiles = [...tileValues, ...tileValues]; 
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  return tiles;
};

const GameBoard = () => {
  const [tiles, setTiles] = useState(createTiles());
  console.log(setTiles)
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (isGameOver) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameOver]);

  useEffect(() => {
    if (matchedTiles.length === tiles.length) {
      setIsGameOver(true);
    }
  }, [matchedTiles, tiles]);

  const handleTileClick = (index) => {
    if (
      flippedTiles.length < 2 &&
      !flippedTiles.includes(index) &&
      !matchedTiles.includes(index)
    ) {
      setFlippedTiles((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (flippedTiles.length === 2) {
      const [firstIndex, secondIndex] = flippedTiles;
      if (tiles[firstIndex] === tiles[secondIndex]) {
        setMatchedTiles((prev) => [...prev, firstIndex, secondIndex]);
        setScore((prev) => prev + 1);
      } else {
        setScore((prev) => prev - 1);
      }
      setTimeout(() => setFlippedTiles([]), 1000);
    }
  }, [flippedTiles, tiles]);

  return (
    <div>
      <h1 className='head'>Mahajong Game</h1>
      <div className='score-time'>
        <ScoreBoard score={score} />
        <Timer time={time} />
      </div>
      <div className='game-border'>
        <p className='player-name'>Welcome {playername} 👋👋</p>
        {isGameOver ? (
          <SuccessScreen score={score} time={time} />
        ) : (
          <div className='game-board'>
            {tiles.map((tile, index) => (
              <Tile
                key={index}
                value={tile}
                isFlipped={
                  flippedTiles.includes(index) || matchedTiles.includes(index)
                }
                onClick={() => handleTileClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBoard;
