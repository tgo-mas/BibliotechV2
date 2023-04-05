import { Card, Container, Table } from "react-bootstrap";
import { getEmprestimos } from "../../firebase/emprestimos";
import { getLivros } from "../../firebase/livros"
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import "./VisaoGeral.css"

export function VisaoGeral() {

    const [darkMode] = useContext(DarkModeContext);
    const [totalEmprestimos, setTotalEmprestimos] = useState([0, 0, 0, 0]);
    const [totalLivros, setTotalLivros] = useState(0);

    function attEmprestimos() {
        getEmprestimos()
            .then((emps) => {
                let total = [0, 0, 0, 0];
                total[0] = emps.length;
                emps.forEach((emp) => {
                    switch (emp.status) {
                        case "Entregue":
                            total[1]++;
                            break;
                        case "Pendente":
                            total[2]++;
                            break;
                        case "Atrasado":
                            total[3]++;
                        default:
                    }
                });
                setTotalEmprestimos(total);
            });
    }

    function attLivros() {
        getLivros()
            .then((livros) => {
                setTotalLivros(livros.length);
            });
    }

    useEffect(() => {
        attEmprestimos();
        attLivros();
    }, [])

    let styleCard = {};

    if (darkMode === 'dark') {
        styleCard.backgroundColor = "#444";
        styleCard.color = "#fff";
    }

    return (
        <Container className={darkMode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}>
            <div className={darkMode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}>
                <h2>Visão Geral</h2>
            </div>
            <hr />
            <div
                className={"d-flex justify-content-center gap-5 " + (darkMode === "dark" ? "bg-dark text-light" : "bg-light text-dark")}
            >
                <Card style={{ width: "300px", ...styleCard }}>
                    <Card.Title className="pt-3 mt-3 text-center">
                        <p style={{ fontSize: "25px" }}>Total de empréstimos</p>
                    </Card.Title>
                    <Card.Body className="text-center cardBody">
                        {totalEmprestimos[0]}
                    </Card.Body>
                </Card>
                <Card style={{ width: "300px", ...styleCard }}>
                    <Card.Title className="pt-3 mt-3 text-center">
                        <p style={{ fontSize: "25px" }}>Total de livros</p>
                    </Card.Title>
                    <Card.Body className="text-center cardBody">
                        {totalLivros}
                    </Card.Body>
                </Card>
                <Card style={{ width: "300px", ...styleCard }}>
                    <Card.Title className="pt-3 mt-3 text-center">
                        <p style={{ fontSize: "25px" }}>Controle de <br/> empréstimos</p>
                    </Card.Title>
                    <Card.Body className="text-center cardBodyDuplo">
                        <div>
                            Entregues
                        </div>
                        {totalEmprestimos[1]}
                        <div className="d-flex justify-content-center align-items-center">
                            <Table className={darkMode === 'dark' ? 'text-light' : 'text-dark'}>
                                <thead>
                                    <tr>
                                        <td>Pendentes</td>
                                        <td>Atrasados</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{totalEmprestimos[2]}</td>
                                        <td>{totalEmprestimos[3]}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );

}