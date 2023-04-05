import { useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEmprestimos, updateEmprestimo } from "../../firebase/emprestimos";
import { Loader } from "../../components/Loader/Loader";

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);

  useEffect(() => {
    getEmprestimos().then((busca) => {
      busca.forEach((emprestimo) => {
        let agora = new Date(Date.now());
        console.log(emprestimo.dataEntrega);
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

  return (
    <div className="emprestimos mt-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Empréstimos</h1>
          <Button as={Link} to="/emprestimos/adicionar" variant="success">
            Adicionar emprestimo
          </Button>
        </div>
        <hr />
        {emprestimos === null ? (
          <Loader className="m-3" />
        ) : (
          <Table striped bordered hover className="text-center">
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
