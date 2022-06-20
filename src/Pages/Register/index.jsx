import FormRegister from "../Register/FormRegister";
import { BackButton, ContainerHeader } from "./style";
import { GlobalContainer } from "../../styles/global";
import { StyledRegister, Logo } from "./style";
import logoHub from "../../assets/img/logoHub.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [Logged, setLogged] = useState(false);
  const history = useHistory();
  return (
    <GlobalContainer>
      <ContainerHeader>
        <Logo src={logoHub} />
        <BackButton onClick={() => history.push("/")}>Voltar</BackButton>
      </ContainerHeader>
      <StyledRegister>
        <h3>Crie sua conta</h3>
        <FormRegister Logged={Logged} setLogged={setLogged} />
      </StyledRegister>
    </GlobalContainer>
  );
};

export default Register;
