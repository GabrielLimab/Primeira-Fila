import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../Atoms/TextInput/TextInput";
import Button from "../Atoms/Button/Button";
import Socials from "../Atoms/Socials/Socials";
import "./SignUp.css";

interface SignUpProps {
  setAuthMode: React.Dispatch<React.SetStateAction<string>>;
}

function SignUp({ setAuthMode }: SignUpProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="signup-container">
      <p className="welcome">INSCREVA-SE!</p>
      <p className="signup-message">Crie sua conta</p>
      <form className="signup-form" onSubmit={handleSignUp}>
        <TextInput
          placeholder="Seu Nome"
          value={name}
          type="name"
          setValue={setName}
          name="name"
        />
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
        <div className="submit-button">
          <Button text="INSCREVER-SE" darkMode></Button>
        </div>
      </form>
      <div className="text-divider">
        <strong>Ou</strong>
      </div>
      <Socials></Socials>
      <p className="go-to-login">
        Já possui uma conta?{" "}
        <Link
          to="#"
          onClick={() => {
            setAuthMode("login");
          }}
        >
          <strong>ENTRE AQUI</strong>
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
