import { ToastContainer, toast } from "react-toastify";

import CloseIcon from "@mui/icons-material/Close";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { required } from "yup";

import { GlobalButton } from "../../../styles/global";
import { FormContainer, StyledHead, StyledScreenAdd } from "./style";
import { Api } from "../../../services/Api";
import { useEffect } from "react";

const notify = () =>
  toast.error("Tecnologia já existe!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const ScreenAdd = ({ setPopUpIsOpen, techs, setTechs }) => {
  const schema = yup.object().shape({
    title: yup.string().min(4, "min 4 characteres").required("Required Field!"),
    status: yup.string().required("Required Field!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const Token = localStorage.getItem("Hub:Token");

    const verify = techs.some((tech) => tech.title === data.title);
    verify
      ? notify()
      : Api.post("/users/techs", data, {
          headers: {
            Authorization: `Bearer: ${Token}`,
          },
        });
  };

  return (
    <StyledScreenAdd>
      <StyledHead>
        <p>Cadastrar Tecnologia</p>
        <CloseIcon onClick={() => setPopUpIsOpen(false)} />
      </StyledHead>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input type="text" {...register("title")} />
        {errors.title && <span className="error">{errors.title.message}</span>}

        <label>Selecionar Status</label>
        <select {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediario</option>
          <option value="avancado">avançado</option>
        </select>

        <GlobalButton type="submit">Cadastrar Tecnologia</GlobalButton>
      </FormContainer>
    </StyledScreenAdd>
  );
};

export default ScreenAdd;
