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
            <p>Front row movie rate</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
