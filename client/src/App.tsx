import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import "./App.css";
import Movie from "./components/Movie/Movie";

function App() {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<Home />} path="/" />
              <Route element={<Profile />} path="users/:teste" />
              <Route element={<h1>Not Found</h1>} path="*" />
            </Route>
            <Route element={<Auth />} path="login" />
          </Routes>
        </Layout>
        <Header/>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" />
            <Route element={<Profile />} path="users/:teste" />
            <Route element={<Movie />} path="movie" />
            <Route element={<h1>Not Found</h1>} path="*" />
          </Route>
          <Route element={<Auth />} path="login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
