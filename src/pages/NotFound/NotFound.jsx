import { Container } from "react-bootstrap";
import loginImg from "../../assets/images/login.png";
import { Button, ButtonGroup, Modal, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleVoltarClick() {
    navigate(-1);
  }
  function irParaLogin() {
    navigate("/login");
  }
  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reportar Erro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digite seu e-mail para contato</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@exemplo.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descreva o seu reporte:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      ></div>
      <div className="NotFound-Group">
        <div className="d-flex justify-content-center align-items-center">
          <img width={"500"} src={loginImg} alt="Imagem da logo" />
        </div>
        <h3 className="text-center">
          Não encontramos a sua página - "
          <span className="text-danger">{location.pathname}</span>"
        </h3>
        <div className="d-flex justify-content-center">
          <ButtonGroup size="lg" className="mb-2 mt-3">
            <Button variant="outline-warning" onClick={handleVoltarClick}>
              Voltar{" "}
            </Button>
            <Button variant="outline-success" onClick={irParaLogin}>
              Login
            </Button>
            <Button variant="outline-danger" onClick={handleShow}>
              Reportar
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Container>
  );
}
