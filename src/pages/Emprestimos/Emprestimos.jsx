import { useContext, useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getEmprestimos, updateEmprestimo } from "../../firebase/emprestimos";
import { Loader } from "../../components/Loader/Loader";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate()

  useEffect(() => {
    getEmprestimos().then((busca) => {
      busca.forEach((emprestimo) => {
        let agora = new Date(Date.now());
        if(agora.getTime() > emprestimo.dataEntrega.toDate().getTime() && emprestimo.status === "Pendente"){
            emprestimo.status = "Atrasado";
            updateEmprestimo(emprestimo.id, emprestimo);
        }
      })
      setEmprestimos(busca);
    });
  }, []);

  function getBadgeStatus(status){
    switch(status){
        case "Atrasado":
            return "danger";
        case "Pendente":
            return "warning";
        case "Entregue":
            return "success";
        default:
            return "secondary";
    }
  }


  function onCreatEmprestimo() {
    navigate("/emprestimos/adicionar")
  }

  return (
    <div className="emprestimos mt-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Empréstimos</h1>
          <button src="/livros/adicionar" className={darkMode ? "contactButtonDark shadow" : "contactButtonLight shadow"} onClick={onCreatEmprestimo}>
            {" "}
            Adicionar empréstimo 
            <div className={darkMode ? "iconButtonDark" : "iconButtonLight"}>
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
        {emprestimos === null ? (
          <Container className="p-3 m-3"><Loader /></Container>
          ) : (
          <Table striped bordered hover className="text-center border border-2 rounded-2" variant={darkMode ? "dark" : ""}>
            <thead>
              <tr>
                <th>Leitor</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Livro</th>
                <th>Status</th>
                <th>Data de Empréstimo</th>
                <th>Data de Entrega</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {emprestimos.map((emprestimo) => {
                const dataEmprestimo = emprestimo.dataEmprestimo
                  .toDate()
                  .toLocaleDateString("pt-br");
                const dataEntrega = emprestimo.dataEntrega
                  .toDate()
                  .toLocaleDateString("pt-br");
                return (
                  <tr key={emprestimo.id}>
                    <td>{emprestimo.leitor}</td>
                    <td>{emprestimo.email}</td>
                    <td>{emprestimo.telefone}</td>
                    <td>{emprestimo.livro.titulo}</td>
                    <td>
                      <Badge
                        className="shadow"
                        bg={getBadgeStatus(emprestimo.status)}
                      >
                        {emprestimo.status}
                      </Badge>
                    </td>
                    <td>{dataEmprestimo}</td>
                    <td>{dataEntrega}</td>
                    <td>
                      <Button
                        as={Link}
                        to={`/emprestimos/editar/${emprestimo.id}`}
                        variant="warning"
                        size="sm"
                        className="shadow"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}
