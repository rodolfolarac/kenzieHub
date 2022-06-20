import { BackButton, StyledFormRegister, StyledInput } from "./style";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GlobalButton } from "../../../styles/global";

import { Api } from "../../../services/Api";

const FormRegister = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Required Field"),
    email: yup.string().required("Required Field!").email("Email invalid!"),
    password: yup.string().required("Required Field!"),
    confirmPassword: yup
      .string()
      .required("Required Field")
      .oneOf([yup.ref("password")], "Password does not match!"),
    bio: yup.string().required("Required Field!"),
    contact: yup.string().required("Required Field!"),
    course_module: yup.string().required("Required Field!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerperson = (data) => {
    console.log(data);
    Api.post("/users", data)
      .then((res) => {
        console.log(res);
      })
      .then((res) => {
        toast.success("Usuário Registrado com sucesso!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Usuário não pode ser registrado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    console.log(data);
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(registerperson)}>
      <label>Nome</label>
      <StyledInput>
        <input type="text" {...register("name")} />
      </StyledInput>
      {errors.name && <span className="error">{errors.name.message}</span>}

      <label>Email</label>
      <StyledInput>
        <input type="email" {...register("email")} />
      </StyledInput>
      {errors.email && <span className="error">{errors.email.message}</span>}

      <label>Senha</label>
      <StyledInput>
        <input type="password" {...register("password")} />
      </StyledInput>
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <label>Confirmar Senha</label>
      <StyledInput>
        <input type="password" {...register("confirmPassword")} />
      </StyledInput>
      {errors.confirmPassword && (
        <span className="error">{errors.confirmPassword.message}</span>
      )}

      <label>Bio</label>
      <StyledInput>
        <input type="text" {...register("bio")} />
      </StyledInput>
      {errors.bio && <span className="error">{errors.bio.message}</span>}

      <label>Contato</label>
      <StyledInput>
        <input type="text" {...register("contact")} />
      </StyledInput>
      {errors.contact && (
        <span className="error">{errors.contact.message}</span>
      )}

      <label>Selecione Módulo</label>
      <StyledInput>
        <select {...register("course_module")}>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Primeiro Módulo">Segundo Módulo</option>
          <option value="Primeiro Módulo">Terceiro Módulo</option>
        </select>
      </StyledInput>
      {errors.contact && (
        <span className="error">{errors.contact.message}</span>
      )}

      <GlobalButton type="submit">Cadastrar</GlobalButton>
    </StyledFormRegister>
  );
};

export default FormRegister;
