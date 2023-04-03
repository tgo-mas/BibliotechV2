import { Link } from "react-router-dom";
import { Button, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { cadastrarEmailSenha, loginGoogle } from "../../firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.png";

import { useState } from "react";

export function Cadastro() {
  const [mostrarSenhaV, SetMostrarSenha] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    const { email, senha } = data;
    cadastrarEmailSenha(email, senha)
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

  function onLoginGoogle() {
    // then = quando der certo o processo
    loginGoogle()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }
  
  const mostrarSenha = () => {
    SetMostrarSenha(!mostrarSenhaV);
  };
  return  (
    <Container fluid className="my-5">
      <hr />
      <Form
        className="mt-5 form-Login border p-2 d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-center">
          <img className="imgLoginForm" src={loginImg} width="200" alt="Logo" />
        </p>
        <h4>Seja Bem-vindo(a)!</h4>
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
            Já possui conta? <Link to="/login">Login</Link>
            </p>
          </Form.Group>
          <div className="btn-Form-Login d-flex justify-content-center w-100">
            <Button
              type="submit"
              variant="success"
              className="btn-block btn-login shadow-sm"
            >
              Cadastrar
            </Button>
          </div>
          <hr className="mt-4 mb-4" />
          <p className="text-center text-muted">Outras opções de cadastro:</p>
        </div>
        <div className="flex-c-m d-flex justify-content-center mb-3">
          <a href="#" className="login100-social-item bg1">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="login100-social-item bg2">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="#"
            className="login100-social-item bg3"
            onClick={onLoginGoogle}
          >
            <i className="bi bi-google"></i>
          </a>
        </div>
      </Form>
    </Container>
  );
}
