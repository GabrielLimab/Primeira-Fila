import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.png";
import user from "../../assets/user.png";
import vector from "../../assets/vector.png";
import GlobalStyle from "../Styles/Font";
import { useNavigate } from "react-router-dom";
import {
  CategorySelect,
  HeaderContainer,
  HeaderContent,
  LeftHeader,
  Logo,
  RightButtons,
  RightButtonsText,
  SearchBar,
  SearchIcon,
  SearchInput,
  StyledLink,
  UserIcon,
  VectorIcon
} from './Header.style';


const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <HeaderContainer>
      <GlobalStyle />
      <HeaderContent>
        <LeftHeader>
          <StyledLink to="/">
            <Logo src={logo} alt="logo" />
          </StyledLink>
          <StyledLink to="/">Filmes</StyledLink>
          <StyledLink to="/about">Séries</StyledLink>
          <StyledLink to="/contact">Resenhas</StyledLink>
          <StyledLink to="/contact">Seguindo</StyledLink>
        </LeftHeader>
        <SearchBar>
          <CategorySelect>
            <option value="all">All</option>
            <option value="movies">Filmes</option>
            <option value="tv-shows">Séries</option>
          </CategorySelect>
          <SearchInput type="text" placeholder="Buscar Primeira Fila" />
          <SearchIcon src={search} alt="search" />
        </SearchBar>
        <RightButtons>
          <StyledLink to="/minha-lista" className="ok">
            <VectorIcon src={vector} alt="vector" />
            <RightButtonsText>Minha lista</RightButtonsText>
          </StyledLink>
        </RightButtons>
        <RightButtons>
          <StyledLink to="/usuario" className="ok">
            <UserIcon src={user} alt="user" />
            <RightButtonsText>Usuário</RightButtonsText>
            <button onClick={handleLogout}>Logout</button>
          </StyledLink>
        </RightButtons>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;