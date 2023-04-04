import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
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
import { React } from 'react'
import { DarkModeContext } from "./contexts/DarkModeContext";


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
    }
}
useEffect(() => {
  // Monitorar o usuário conectado
  // Logado/Deslogado
  onAuthStateChanged(auth, (user) => {
    // user nulo é deslogado
    // user objeto é logado
    setUsuarioLogado(user);
  });

  // Esse efeito irá rodar apenas uma vez
  // Quando o App for renderizado/inicializado
}, []);

  return (
    <>
        <AuthContext.Provider value={usuarioLogado}>
        <DarkModeContext.Provider value={[darkMode, mudarTema]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/livros/adicionar" element={<AdicionarLivro />} />
              <Route path="/livros/editar/:id" element={<EditarLivro />} />
              <Route path="/emprestimos" element={<Emprestimos />} />
              <Route path="/emprestimos/adicionar" element={<AdicionarEmprestimo />} />
              <Route path="/emprestimos/editar/:id" element={<EditarEmprestimo />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/loading" element={<Carregamento />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </DarkModeContext.Provider>
      </AuthContext.Provider>
      <Toaster />
    </>
  )};
