import { StyledFormHome, StyledInput } from "./style";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GlobalButton } from "../../../styles/global";

import { Api } from "../../../services/Api";
import { Redirect } from "react-router-dom";

const FormHome = ({ Logged, setLogged }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Required Field!").email("Email invalid!"),
    password: yup.string().required("Required Field!"),
    // .matches(
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    //   "Password must contain at least one capital letter, one number and one special character!"
    // ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const logIn = (data) => {
    Api.post("/sessions", data)
      .then((res) => {
        window.localStorage.setItem("Hub:Id", res.data.user.id);
        window.localStorage.setItem("Hub:Token", res.data.token);
        setLogged(true);
      })
      .catch((err) => {
        console.log("oi");
        toast.error("Usuario ou senha inválido!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    console.log(data);
  };

  if (Logged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <StyledFormHome onSubmit={handleSubmit(logIn)}>
      <label>Email</label>
      <StyledInput>
        <input type="email" {...register("email")} />
      </StyledInput>
      {errors.email && <span className="error">{errors.email.message}</span>}

      <label>Senha</label>
      <StyledInput>
        <input type="password" {...register("password")} />
        <RemoveRedEyeIcon />
      </StyledInput>
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <GlobalButton type="submit">Entrar</GlobalButton>
    </StyledFormHome>
  );
};

export default FormHome;
