import { useContext, useState } from "react";
import { Button, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthContext";
import { loginGoogle, loginEmailSenha, loginFacebook } from "../../firebase/auth";
import "./Login.css";

export function Login() {
  const [mostrarSenhaV, SetMostrarSenha] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    const { email, senha } = data;
    loginEmailSenha(email, senha)
      .then((user) => {
        toast.success(`Entrando como ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGoogle() {
    loginGoogle()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginFacebook() {
    loginFacebook()
      .then((res) => {
        toast.success(`Bem-vindo(a) ${res.user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. ${erro.message}`, {
          position: "bottom-right",
          duration: 2500,
        });
      })
  }

  const usuarioLogado = useContext(AuthContext);

  const mostrarSenha = () => {
    SetMostrarSenha(!mostrarSenhaV);
  };

  // Se tiver dados no objeto, está logado
  if (usuarioLogado !== null) {
    return <Navigate to="/" />;
  }

  return (
    <Container fluid className="my-5">
      <hr />
      <Form
        className="mt-5 form-Login border p-2 d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-center">
          <img className="imgLoginForm" src={loginImg} width="200" alt="Logo" />
        </p>
        <h4>Bem-vindo(a) de volta!</h4>
        <div className="Form-Login-Master">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu email"
              className={errors.email ? "is-invalid input-Form shadow" : "input-Form shadow"}
              {...register("email", { required: "Email é obrigatório" })}
            />
            <Form.Text className="invalid-feedback">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha:</Form.Label>
            <InputGroup>
              <FormControl
                type={mostrarSenhaV ? "text" : "password"}
                placeholder="Sua senha"
                className={
                  errors.senha ? "is-invalid input-Form shadow" : "input-Form shadow"
                }
                {...register("senha", { required: "Senha é obrigatória" })}
                autoComplete="off"
              />
              <a className="mostrarSenha mt-3 mx-1" onClick={mostrarSenha}>
                <i className={`bi bi-eye${mostrarSenhaV ? "-slash" : ""}`}></i>
              </a>
            </InputGroup>
            <Form.Text className="invalid-feedback">
              {errors.senha?.message}
            </Form.Text>
            <p className="text-muted mt-3">
              Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </Form.Group>
          <div className="btn-Form-Login d-flex justify-content-center w-100">
            <Button
              type="submit"
              variant="success"
              className="btn-block btn-login shadow-sm"
            >
              Entrar
            </Button>
          </div>
          <hr className="mt-4 mb-4" />
          <p className="text-center text-muted">Outras opções de login:</p>
        </div>
        <div className="flex-c-m d-flex justify-content-center mb-3">
          <a
            href="#"
            className="login100-social-item bg1 shadow"
            onClick={onLoginFacebook}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="login100-social-item bg2 shadow"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="#"
            className="login100-social-item bg3 shadow"
            onClick={onLoginGoogle}
          >
            <i className="bi bi-google"></i>
          </a>
        </div>
      </Form>
    </Container>
  );
}
