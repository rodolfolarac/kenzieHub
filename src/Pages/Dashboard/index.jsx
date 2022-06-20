import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { GlobalContainer } from "../../styles/global";
import Header from "./Header";
import { Api } from "../../services/Api";
import WelcomeArea from "./WelcomeArea";
import { TechArea } from "./styles";
import ListTechs from "./ListTechs";
import ScreenAdd from "./ScreenAdd";

const Dashboard = () => {
  const [profile, setprofile] = useState([]);
  const [techs, setTechs] = useState([]);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);

  const handleAdd = () => {
    setPopUpIsOpen(true);
  };

  useEffect(() => {
    const dataTech = localStorage.getItem("Hub:Id");
    console.log(dataTech);
    dataTech &&
      Api.get(`/users/${dataTech}`).then((res) => {
        setprofile(res.data);
        setTechs(res.data.techs);
      });
  }, [techs]);

  return (
    <GlobalContainer>
      <Header />

      <WelcomeArea profile={profile} />

      <TechArea>
        <p>Tecnologias</p>

        <button onClick={() => handleAdd()}>
          <AddIcon />
        </button>
      </TechArea>
      {profile.techs && <ListTechs Techs={techs} setTechs={setTechs} />}

      {popUpIsOpen && (
        <ScreenAdd
          techs={techs}
          setTechs={setTechs}
          setPopUpIsOpen={setPopUpIsOpen}
        />
      )}
    </GlobalContainer>
  );
};

export default Dashboard;
