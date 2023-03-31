import { Spinner } from "react-bootstrap";
import logo from "../../assets/icons/livros.png"
import "./Carregamento.css"

export function Carregamento() {
    return (
        <div className="carregamento">
            <img src={logo} alt='Logo Bibliotech' />
            <Spinner variant="success" className="mt-3" />
        </div>
    );
}