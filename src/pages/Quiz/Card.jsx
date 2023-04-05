import React from "react";

import "./Card.css";

const Card = (props) => {
  return <div className="cardQuiz">{props.children}</div>;
};

export default Card;
