import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  const exitQuiz = () => {
    if (window.confirm("Deseja Sair do Quiz?")) {
      window.history.back();
    }
  };

  return (
    <Card>
      <h1 className="headerQuiz">BLIBLIOTECH QUIZ</h1>
      <h3 className="primary_text">Nick de Usuario</h3>
      <input
        type="text"
        placeholder="Username"
        className="username_input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="start_btn" onClick={startGame}>
        Jogar
      </button>

      <p className="top_score">
        Pontos: <span>{topScore}</span>
      </p>

      <button className="exit_btn" onClick={exitQuiz}>
        Sair
      </button>
    </Card>
  );
};

export default StartingPage;
