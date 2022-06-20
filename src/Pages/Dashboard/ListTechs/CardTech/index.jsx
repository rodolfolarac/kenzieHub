import { StyledCardTech, ContainerTrash } from "./style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Api } from "../../../../services/Api";

const TechCard = ({ title, status, id, setTechs, Techs }) => {
  const handleClick = (event) => {
    const idTech = id;
    const Token = localStorage.getItem("Hub:Token");

    Api.delete(`/users/techs/${idTech}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
  };
  return (
    <StyledCardTech>
      <p>{title}</p>

      <ContainerTrash>
        <span>{status}</span>{" "}
        <button className={id} onClick={(e) => handleClick(e)}>
          <DeleteOutlineIcon />
        </button>
      </ContainerTrash>
    </StyledCardTech>
  );
};

export default TechCard;
