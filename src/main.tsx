import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Game from "./Game/Game";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
