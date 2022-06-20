import { GlobalButton } from "../../../styles/global";
import { Logo } from "../../Home/style";
import { StyledHeader } from "./style";
import logoHub from "../../../assets/img/logoHub.svg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <StyledHeader>
      <Logo src={logoHub} />
      <GlobalButton onClick={() => logOut()} BgColor="#212529">
        Sair
      </GlobalButton>
    </StyledHeader>
  );
};

export default Header;
