import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export function Home() {
  const resultado = useContext(DarkModeContext);
  const darkMode = resultado.darkMode;


  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <p>Home</p>
    </div>
  )
};

