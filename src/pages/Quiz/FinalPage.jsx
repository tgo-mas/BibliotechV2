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
  const handlePlayAgainClick = () => {
    setScore(0);
    setUsername("");
    setShowFinalPage(false);
    setShowStartingPage(true);
    topScore < score && setTopScore(score);
  };

  return (
    <Card>
      <h1 className="heading">Parabéns, {username}! Você concluiu o jogo.</h1>
      <h3 className="primary_text">Pontuação Final:</h3>
      <h3 className="final_score">{score}</h3>
      <button className="play_again_btn" onClick={handlePlayAgainClick}>
        Jogar Novamente
      </button>
      <ExitButton />
    </Card>
  );
};

const ExitButton = () => (
  <Link to="/BibliotechV2">
    <button className="exit-btn">Sair</button>
  </Link>
);

export default FinalPage;