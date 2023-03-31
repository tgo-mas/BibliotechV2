import { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/AuthContext";

// Layout principal do App com Navbar Fixa
// As páginas com Navbar fixa: home, livros, empréstimos, etc
export function Root() {
  const usuarioLogado = useContext(AuthContext);
  const navigator = useNavigate();

  useEffect(() => {
    if(usuarioLogado === null){
      navigator("/loading");
    }else{
      navigator("/");
    }
  }, [])

  setTimeout(() => {
    if(usuarioLogado === null){
      navigator("/login");
    }else{
      navigator("/");
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
    </>
  );
}
