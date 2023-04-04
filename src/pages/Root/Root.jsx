import { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/AuthContext";
import { Footer } from "../../components/Footer/Footer";

// Layout principal do App com Navbar Fixa
// As páginas com Navbar fixa: home, livros, empréstimos, etc
export function Root() {
  const usuarioLogado = useContext(AuthContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (usuarioLogado === null) {
      navigator("/loading");
    }
  }, [navigator, usuarioLogado])

  setTimeout(() => {
    if (usuarioLogado === null) {
      navigator("/login");
    }
  }, 1500);

  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
