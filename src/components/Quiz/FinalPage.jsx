import React from "react";
import Card from "./Card";
import "./FinalPage.css";
import { Link } from "react-router-dom";

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {
  const handleClick = () => {
    setScore(0);
    setUsername("");
    setShowFinalPage(false);
    setShowStartingPage(true);
    if (score > topScore) {
      setTopScore(score);
    }
  };

  const handleExitClick = () => {
    //
  };

  return (
    <Card>
      <h1 className="heading">Parabéns, {username}! Você concluiu o jogo.</h1>
      <h3 className="primary_text">Pontuação Final:</h3>
      <h3 className="final_score">{score}</h3>
      <button className="play_again_btn" onClick={handleClick}>
        Jogar Novamente
      </button>
      <Link to="/">
           <button className="exit-btn" onClick={handleExitClick}>Sair</button>
      </Link>

    </Card>
  );
};

export default FinalPage;
