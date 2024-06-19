import { Link, useNavigate } from "react-router-dom";
import reactIcon from "../../assets/react.svg";
import "./Login.css";

interface LoginProps {
  setAuthMode: React.Dispatch<React.SetStateAction<string>>;
}
function Login({ setAuthMode }: LoginProps) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here
    localStorage.setItem("token", "success");
    navigate("/");
  };

  return (
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
      <div className="text-divider">Or</div>
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
        Novo Usuário?{" "}
        <Link
          to="#"
          onClick={() => {
            setAuthMode("signup");
          }}
        >
          INSCREVA-SE AQUI
        </Link>
      </p>
    </div>
  );
}
export default Login;
