import { StyledWelcomeArea } from "./style";

const WelcomeArea = ({ profile }) => {
  return (
    <StyledWelcomeArea>
      <p>{`Olá, ${profile.name}`}</p>
      <span>{profile.course_module}</span>
    </StyledWelcomeArea>
  );
};

export default WelcomeArea;
