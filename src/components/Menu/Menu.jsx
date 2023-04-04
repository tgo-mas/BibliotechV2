import "./Menu.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "./../../assets/icons/livros.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext"
import { DarkModeContext } from "../../contexts/DarkModeContext";

export function Menu() {
  const navigate = useNavigate();
  const usuarioLogado = useContext (AuthContext);
  const [darkMode, mudarTema] = useContext(DarkModeContext);

  function onLogout() {
    logout().then(() => {
      navigate("/login");
    
    });
  }

  return (
    <Navbar 
      bg={darkMode==='' ? "light" : "success"}
      variant={darkMode==='' ? "light" : "light"}
      expand="lg">

      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logoIcon} width="32" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/livros">
              Livros
            </Nav.Link>
            <Nav.Link as={Link} to="/emprestimos">
              Emprestimos
            </Nav.Link>
            <Nav.Link as={Link} to="/">
            {usuarioLogado.email}
            </Nav.Link>
            <Nav.Link onClick={()=>mudarTema(darkMode=== ''?
            'dark':'')}>
              <i className={darkMode==='' ? "bi bi-sun" :
              "bi bi-moon"}></i>
            </Nav.Link>
            <Nav.Link onClick={onLogout}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
