import TextInput from "../Atoms/TextInput/TextInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button/Button";
import Socials from "../Atoms/Socials/Socials";
import "./SignUp.css";

interface SignUpProps {
  setAuthMode: React.Dispatch<React.SetStateAction<string>>;
}
function SignUp({ setAuthMode }: SignUpProps) {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="signup-container">
      <p className="welcome">SEJA BEM VINDO!</p>
      <p className="signup-message">Entre em sua conta</p>
      <form className="signup-form" onSubmit={handleSignUp}>
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
        <div className="signup-controls">
          <div className="remember">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Lembre de mim</label>
          </div>
          <a href="/">Esqueci minha senha</a>
        </div>
        <Button text="CONTINUAR" darkMode></Button>
      </form>
      <div className="text-divider">
        <strong>Or</strong>
      </div>
      <Socials></Socials>
      <p className="new-user">
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
export default SignUp;
