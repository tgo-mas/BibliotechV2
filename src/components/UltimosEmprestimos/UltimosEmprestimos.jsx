import { Container, Table } from "react-bootstrap";
import { getUltimosEmprestimos } from "../../firebase/emprestimos";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export function UltimosEmprestimos() {

    const [ultimosEmprestimos, setUltimosEmprestimos] = useState([]);
    const {darkMode} = useContext(DarkModeContext);

    useEffect(() => {
        getUltimosEmprestimos()
            .then((emps) => {
                setUltimosEmprestimos(emps);
            })
    }, [])

    return (
        <Container>
            <h2 className="mt-3 pt-3">Últimos empréstimos</h2>
            <Container className="p-3">
                <Table className={(darkMode === "light" ? "text-dark " : "text-light ") + "text-center"}>
                    <thead>
                        <tr>
                            <th>Leitor</th>
                            <th>Livro</th>
                            <th><i class="bi bi-clock-fill"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ultimosEmprestimos.map((emp) => {
                            return (
                                <tr>
                                    <td>{emp.leitor}</td>
                                    <td>{emp.livro}</td>
                                    <td>{emp.dataEmprestimo}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </Container>
    )

}