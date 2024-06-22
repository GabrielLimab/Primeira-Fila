import logo from "../../assets/logo.png";
import Login from "../Login/Login";

import { useState } from "react";
import "./Auth.css";

function Auth() {
  const [authMode, setAuthMode] = useState("login");

  return (
    <div className="auth-page">
      <div className="content">
        <div className="introduction">
          <div className="logo-container">
            <img src={logo} alt="logo" />
            <p className="title">Primeira Fila</p>
          </div>
          <div className="slides">
            <p>Avalie seus filmes favoritos</p>
            <span>
              Veja o que todos estão assistindo no momento, salve seus filmes
              preferidos e compartilhe sua opinião com o mundo.
            </span>
          </div>
        </div>
        <div className="auth-container">
          {authMode === "login" ? (
            <Login setAuthMode={setAuthMode} />
          ) : (
            <h1>Sign Up</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
