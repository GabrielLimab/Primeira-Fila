import { Link, useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform authentication logic here
        localStorage.setItem("token", "success");
        navigate("/");
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log In</button>
            <Link to="signup">
                <button>Sign Up</button>
            </Link>
        </div>
    );
}
export default Login;
