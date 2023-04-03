import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { ModalLivro } from "../../components/ModalLivro/ModalLivro";
import { deleteLivro, getLivros } from "../../firebase/livros";
import "./Livros.css";

export function Livros() {
  const [livros, setLivros] = useState(null);
  const [show, setShow] = useState(false);
  const [livroModal, setLivroModal] = useState(null);

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

  return (
    <div className="livros">
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h1>Livros</h1>
          <Button as={Link} to="/livros/adicionar" variant="success">
            Adicionar Livro
          </Button>
        </div>
        <hr />
        {livros === null ? (
          <Loader />
        ) : (
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>ISBN</th>
                <th>Imagem</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
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
                        className="me-2"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => onDeleteLivro(livro.id, livro.titulo)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </Button>
                      <Button
                        className="ms-2"
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
