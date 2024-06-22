import "./Button.css";

interface ButtonProps {
  text: string;
  icon?: string;
  darkMode?: boolean;
}

const Button = ({ text, icon, darkMode }: ButtonProps) => {
  return (
    <button className={`button-container ${darkMode ? 'dark' : ''}`}>
      {icon && <img src={icon} alt="logo" />}
      {text}
    </button>
  );
};

export default Button;
