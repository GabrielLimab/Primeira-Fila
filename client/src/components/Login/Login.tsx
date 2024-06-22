import TextInput from "../Atoms/TextInput/TextInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button/Button";
import Socials from "../Atoms/Socials/Socials";
import "./Login.css";

interface LoginProps {
  setAuthMode: React.Dispatch<React.SetStateAction<string>>;
}
function Login({ setAuthMode }: LoginProps) {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="login-container">
      <p className="welcome">SEJA BEM VINDO!</p>
      <p className="login-message">Entre em sua conta</p>
      <form className="login-form" onSubmit={handleLogin}>
        <TextInput
          placeholder="Email"
          value={email}
          type="email"
          setValue={setEmail}
          name="email"
        />
        <TextInput
          placeholder="Senha"
          value={password}
          type="password"
          setValue={setPassword}
          name="password"
        />
        <div className="login-controls">
          <div className="remember">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Lembre de mim</label>
          </div>
          <a href="/">Esqueci minha senha</a>
        </div>
        <Button text="CONTINUAR" darkMode></Button>
      </form>
      <div className="text-divider">
        <strong>Ou</strong>
      </div>
      <Socials></Socials>
      <p className="go-to-signup">
        Novo Usuário?{" "}
        <Link
          to="#"
          onClick={() => {
            setAuthMode("signup");
          }}
        >
          <strong>INSCREVA-SE AQUI</strong>
        </Link>
      </p>
    </div>
  );
}
export default Login;
