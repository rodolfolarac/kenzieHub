import { StyledLIstTechs } from "./styles";
import CardTech from "./CardTech";

const ListTechs = ({ Techs, setTechs }) => {
  return (
    <StyledLIstTechs>
      {Techs.map((tech) => {
        console.log(tech);
        return (
          <CardTech
            Techs={Techs}
            title={tech.title}
            status={tech.status}
            key={tech.id}
            id={tech.id}
            setTechs={setTechs}
          />
        );
      })}
    </StyledLIstTechs>
  );
};

export default ListTechs;
