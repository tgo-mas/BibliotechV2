import { Container, Table } from "react-bootstrap";
import { getUltimosEmprestimos } from "../../firebase/emprestimos";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import TimeAgo from "timeago-react"
import * as timeago from 'timeago.js';
import pt_BR from 'timeago.js/lib/lang/pt_BR';

export function UltimosEmprestimos() {

    const [ultimosEmprestimos, setUltimosEmprestimos] = useState([]);
    const { darkMode } = useContext(DarkModeContext);

    useEffect(() => {
        getUltimosEmprestimos()
            .then((emps) => {
                setUltimosEmprestimos(emps);
            })
    }, [])

    // register it.
    timeago.register('pt_BR', pt_BR);

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
                                    <td>{emp.livro.titulo}</td>
                                    <td><TimeAgo datetime={emp.dataEmprestimo.toDate()} locale="pt_BR" /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </Container>
    )

}