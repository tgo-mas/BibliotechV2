import { useEffect, useState } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { getEmprestimos } from "../../firebase/emprestimos";
import { getLivro } from "../../firebase/livros";
import { Loader } from "../Loader/Loader";
import "./ModalLivro.css"

export function ModalLivro({ idLivro, show, onClose }) {

    const [livro, setLivro] = useState({});

    useEffect(() => {
        if(idLivro != null){
            setLivro(null);
            getLivro(idLivro)
                .then((busca) => setLivro(busca));
        }
    }, [idLivro]);

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">
                    Detalhes do Livro
                    {livro === null ? <Loader /> : <></>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {livro !== null ?
                    <>
                        <div>
                            <h2>{livro.titulo}</h2>
                            <h5>{livro.autor}</h5>
                            <p className="mt-4">
                                Categorias: {livro.categorias} <br />
                                ISBN: {livro.isbn}
                            </p>
                        </div>
                        <img src={livro.urlCapa} alt={`Capa do livro ${livro.titulo}`} />
                    </> : <></>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={onClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
    
}