import { Link, useNavigate } from "react-router-dom";
import reactIcon from "../../assets/react.svg";
import logo from "../../assets/logo.png";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here
    localStorage.setItem("token", "success");
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="introduction">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <p>Primeira Fila</p>
        </div>
        <div className="slides">
          <h1>Front row movie rate</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="slider">
            <div className="dash">_</div>
            <div className="dash">_</div>
            <div className="dash">_</div>
          </div>
        </div>
      </div>
      <div className="login-container">
        <p className="welcome">SEJA BEM VINDO!</p>
        <p className="login-message">Entre em sua conta</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Lembre de mim</label>
          <a href="/">Esqueci minha senha</a>
          <button>Log In</button>
        </form>
        <div className="text-divider">or</div>
        <div className="socials">
          <button className="fb-button">
            <img src={reactIcon} alt="fb-icon" /> Log In with Google
          </button>
          <button className="fb-button">
            <img src={reactIcon} alt="fb-icon" /> Log In with Facebook
          </button>
          <button className="fb-button">
            <img src={reactIcon} alt="fb-icon" /> Log In with Apple
          </button>
        </div>
        <p>
          Novo Usuário? <Link to="/signup">INSCREVA-SE AQUI</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
