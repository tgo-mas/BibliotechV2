import "./Menu.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "./../../assets/icons/livros.png";
import { Link } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const menuItems = [
  { to: "/", label: "Home" },
  { to: "/quiz", label: "Quiz" },
  { to: "/blog", label: "Blog" },
  { to: "/livros", label: "Livros" },
  { to: "/emprestimos", label: "Empréstimos" },
];

export function Menu() {
  const usuarioLogado = useContext(AuthContext);
  const {darkMode, mudarTema} = useContext(DarkModeContext);
  const navBarTheme = {
    color: darkMode === "" ? "#212529" : "#f8f9fa",
    backgroundColor: darkMode === "" ? "#f8f9fa" : "#212529",
  };

  function onLogout() {
    logout();
  }

  return (
    <Navbar
      style={navBarTheme}
      expand="lg"
      variant={darkMode === "light" ? "light" : "dark"}
      className={darkMode === "light" ? "darkBorder" : "lighBorder"}
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logoIcon}
              width="32"
              alt="Logo"
              className="ms-2 img-form"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.to}
                as={Link}
                to={item.to}
                className="cta active"
              >
                <span
                  className={
                    darkMode === ""
                      ? "spanHomeLink hover-underline-dark"
                      : "spanHomeLink hover-underline-light"
                  }
                >
                  {item.label}
                </span>
              </Nav.Link>
            ))}
            <Nav.Link as={Link} to="/" className="cta active">
              <span
                className={
                  darkMode === ""
                    ? "spanHomeLink hover-underline-dark"
                    : "spanHomeLink hover-underline-light"
                }
              >
                {usuarioLogado && usuarioLogado.email}
              </span>
            </Nav.Link>
            <Nav.Link onClick={() => mudarTema(darkMode === 'light'?
            'dark': 'light')}>
              <i 
              className={
                darkMode === "light" 
              ? "bi bi-sun spanHomeLink" 
              :"bi bi-moon spanHomeLink"
              }
            ></i>
            </Nav.Link>
            <Nav.Link onClick={onLogout}>
              <i className="bi bi-box-arrow-right me-2 spanHomeLink"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
