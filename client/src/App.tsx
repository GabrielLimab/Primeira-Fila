import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" />
            <Route element={<Profile />} path="users/:teste" />
            <Route element={<h1>Not Found</h1>} path="*" />
          </Route>
          <Route element={<Auth />} path="login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
