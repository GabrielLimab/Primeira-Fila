import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Movie from "./components/Movie/Movie";
import UserPage from "./components/UserPage/UserPage";
import SearchPage from "./components/Ranking/SearchPage";
import { SearchProvider } from "./components/Ranking/SearchContext";

function App() {

  return (
    <div className="App">
      <Router>
        <SearchProvider>
            <Layout>
            <Routes>
                <Route element={<PrivateRoute />}>
                <Route element={<Home />} path="/" />
                <Route element={<Profile />} path="users/:teste" />
                <Route element={<Movie/>} path="movie" />
                <Route element={<h1>Not Found</h1>} path="*" />
                <Route element={<UserPage />} path="user" />
                <Route element={<SearchPage />} path="search"/>
                </Route>
                <Route element={<Auth />} path="auth" />
            </Routes>
            </Layout>
        </SearchProvider>
      </Router>
    </div>
  );
}

export default App;
