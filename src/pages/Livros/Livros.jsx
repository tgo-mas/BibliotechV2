import { useContext, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { ModalLivro } from "../../components/ModalLivro/ModalLivro";
import { deleteLivro, getLivros } from "../../firebase/livros";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import "./Livros.css";

export function Livros() {
  const [livros, setLivros] = useState(null);
  const [show, setShow] = useState(false);
  const [livroModal, setLivroModal] = useState(null);
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    initializeTable();
  }, []);

  function initializeTable() {
    getLivros().then((resultados) => {
      setLivros(resultados);
    });
  }

  function onDeleteLivro(id, titulo) {
    const deletar = window.confirm(
      `Tem certeza que deseja excluir o livro ${titulo}?`
    );
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success(`${titulo} apagado com sucesso!`, {
          duration: 2000,
          position: "bottom-right",
        });
        initializeTable();
      });
    }
  }
  

  function showModalLivro(livro) {
    setLivroModal(livro.id);
    setShow(true);
  }

  const closeModal = () => setShow(false);

  function onCreatBook() {
    navigate("/livros/adicionar")
  }

  return (
    <div className={`livros ${darkMode === "dark" ? "dark-mode" : ""}`}>
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h1>Livros</h1>   
          <button src="/livros/adicionar" className={darkMode === "dark" ? "contactButtonDark shadow" : "contactButtonLight shadow"} onClick={onCreatBook}>
            {" "}
            Adicionar
            <div className={darkMode === "dark" ? "iconButtonDark" : "iconButtonLight"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <hr />
        {livros === null ? (
          <Container className="p-3 m-3"><Loader /></Container>
        ) : (
          <Table
            striped
            bordered
            hover
            className="text-center"
            variant={darkMode === "dark" ? "dark" : "light"}
          >
            <thead className="border border-2 rounded-2">
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>ISBN</th>
                <th>Imagem</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className="border border-2 rounded-2">
              {livros.map((livro) => {
                return (
                  <tr key={livro.id}>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                    <td>
                      {livro.categorias &&
                        Array.isArray(livro.categorias) &&
                        livro.categorias.filter((cat) => cat).join(", ")}
                    </td>
                    <td>{livro.isbn}</td>
                    <td>
                      <img src={livro.urlCapa} alt={livro.titulo} />
                    </td>
                    <td>
                      <Button
                        as={Link}
                        to={`/livros/editar/${livro.id}`}
                        variant="warning"
                        size="sm"
                        className="me-2 shadow"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        className="shadow"
                        onClick={() => onDeleteLivro(livro.id, livro.titulo)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </Button>
                      <Button
                        className="ms-2 shadow"
                        size="sm"
                        variant="success"
                        onClick={() => showModalLivro(livro)}
                      >
                        <i className="bi bi-journal-text"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
      <ModalLivro show={show} idLivro={livroModal} onClose={closeModal} />
    </div>
  );
}
