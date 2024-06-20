// src/components/Header.jsx

import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import './Header.css';
import search from "../../assets/search-icon.png"
import vector from "../../assets/vector.png"
import user from "../../assets/user.png"

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="leftHeader">

            <Link to="/">
              <img src={logo} height={49} width={49} alt="logo"/>
            </Link>


            <Link to="/" className="pageLink">Filmes</Link>
            <Link to="/about" className="pageLink">Séries</Link>
            <Link to="/contact" className="pageLink">Resenhas</Link>
            <Link to="/contact" className="pageLink">Seguindo</Link>

        </div>
        <div className="search-bar">
          <select className="category-select">
            <option value="all">All</option>
            <option value="movies">Filmes</option>
            <option value="tv-shows">Séries</option>
          </select>
          <input type="text" placeholder="Buscar Primeira Fila" className="search-input" />
          <img src={search} height={24} width={24} alt="search" />
        </div>
        <div className="rightButtons">
          <Link to="/minha-lista" className="ok" style={{ textDecoration: 'none'}}>
            <img src={vector} height={18} width={14} alt="vector" />
            <a className="rightButtonsText">Minha lista</a>
          </Link>
        </div>
        <div className="rightButtons">
          <Link to="/usuario" className="ok" style={{ textDecoration: 'none'}}>
            <img src={user} height={22} width={22} alt="user" />
            <a className="rightButtonsText">Usuário</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;