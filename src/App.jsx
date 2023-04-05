import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";
import { Livros } from "./pages/Livros/Livros";
import { EditarLivro } from "./pages/EditarLivro/EditarLivro";
import { AdicionarEmprestimo } from "./pages/AdicionarEmprestimo/AdicionarEmprestimo";
import { Emprestimos } from "./pages/Emprestimos/Emprestimos";
import { EditarEmprestimo } from "./pages/EditarEmprestimo/EditarEmprestimo";
import { Carregamento } from "./pages/Carregamento/Carregamento";
import { NotFound } from "./pages/NotFound/NotFound";
import { Blog } from "./pages/Blog/Blog";
import QuizInit from "./components/Quiz/QuizInit";
import { React } from "react";
import { DarkModeContext } from "./contexts/DarkModeContext";
import Politica from "./pages/Politica/Politica";


export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  // O Estado irá controlar qual tema será utilizado
  const [darkMode, setDarkMode] = useState("");

  // Criando a função que irá trocar o tema
  // Terá acesso a função em qualquer parte do app
  // O valor do tema e a função que muda o tema
  function mudarTema(theme) {
  if (theme !== darkMode) {
  setDarkMode(theme);
  localStorage.setItem("darkMode", theme);
  }
}

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
    });
    
  }, []);

  const changeTema = useCallback((theme) =>{
    mudarTema(theme);
  },[mudarTema] )
useEffect(() => {
  const mode = localStorage.getItem("darkMode");
if (mode && mode === "dark") {
document.querySelector("html").classList.remove("light"); //Caso contrário remove a classe 'dark' e setamos o estado do tema 'light'
  changeTema("dark");
    } else {
  document.querySelector("html").classList.add("light"); //Caso dê verdadeiro,adiciona a classe dark no 'body' e setamos o estado do tema 'light'
  changeTema("light");
    }
}, [changeTema]);


  return (
    <>
      <AuthContext.Provider value={usuarioLogado}>
        <DarkModeContext.Provider value={{darkMode, mudarTema}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Root />}>
                <Route path="/" element={<Home />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/livros/adicionar" element={<AdicionarLivro />} />
                <Route path="/livros/editar/:id" element={<EditarLivro />} />
                <Route path="/emprestimos" element={<Emprestimos />} />
                <Route
                  path="/emprestimos/adicionar"
                  element={<AdicionarEmprestimo />}
                />
                <Route
                  path="/emprestimos/editar/:id"
                  element={<EditarEmprestimo />}
                />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/loading" element={<Carregamento />} />
              <Route path="/Quiz" element={<QuizInit />} />
            <Route path="/Politica" element={<Politica />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DarkModeContext.Provider>
      </AuthContext.Provider>
      <Toaster />
    </>
  );
}
