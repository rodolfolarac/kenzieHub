import FormHome from "../Home/FormHome/index";
import { GlobalButton, GlobalContainer } from "../../styles/global";
import { StyledHome, Logo } from "./style";
import logoHub from "../../assets/img/logoHub.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [Logged, setLogged] = useState(false);
  const history = useHistory();

  return (
    <GlobalContainer>
      <Logo src={logoHub} />
      <StyledHome>
        <h3>Login</h3>
        <FormHome Logged={Logged} setLogged={setLogged} />
        <p>Ainda não possui uma conta?</p>
        <GlobalButton
          BgColor="#868E96"
          onClick={() => history.push("/register")}
        >
          {" "}
          Cadastre-se{" "}
        </GlobalButton>
      </StyledHome>
    </GlobalContainer>
  );
};

export default Home;
