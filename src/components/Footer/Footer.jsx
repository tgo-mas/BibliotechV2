import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import { DarkModeContext } from "../../contexts/DarkModeContext";
import "../../DarkMode.css"

export  function Footer () {
    const {darkMode} = useContext (DarkModeContext)
    return(
        <>
        <footer className="text-center dark text-lg-start text-muted">

        <section className={"header d-flex justify-content-center justify-content-lg-between p-2 " + darkMode}>

            <div className="me-3 d-none d-lg-block fw-bold">
                <span>SE CONECTE A NOSSA RED-SOCIAIS</span>
            </div>

            <div>
                <Link to="" className="me-4 text-reset">
                    <i className="fa bi-facebook"></i>
                </Link>
                <Link to="" className="me-4 text-reset">
                    <i className="fa bi-twitter"></i>
                </Link>
                <Link to="" className="me-4 text-reset">
                    <i className="fa bi-google"></i>
                </Link>
                <Link to="" className="me-4 text-reset">
                    <i className="fa bi-linkedin"></i>
                </Link>
                <Link to="" className="me-4 text-reset">
                    <i className="fa bi-github"></i>
                </Link>
            </div>
        </section>


        <section className={"conteudo " + darkMode}  >
            <div className="container text-center text-md-start">

                <div className="row p-2">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h4 className="text-uppercase fw-bold mb-4">
                            BLIBLIOTECH
                        </h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="col-md-2 col-sm-2 col-xl-2 mx-auto mb-2">

                        <h4 className="text-uppercase fw-bold mb-2">
                            links
                        </h4>

                        <p>
                            <Link to="/" className="text-reset"> Inicio </Link>
                        </p>

                        <p>
                            <Link to="/Sobre" className="text-reset"> Sobre </Link>
                        </p>

                        <p>
                            <Link to="/Politica" className="text-reset"> Politica </Link>
                        </p>
                    </div>


                    <div className="col-md-2 col-sm-2 col-xl-2 mx-auto mb-2">

                        <h4 className="text-uppercase fw-bold mb-2">
                            Serviços
                        </h4>

                        <p>
                            <Link to="/" className="text-reset"> Blog </Link>
                        </p>
                        <p>
                            <Link to="/" className="text-reset"> Eventos </Link>
                        </p>
                        <p>
                            <Link to="/" className="text-reset"> Noticias </Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h4 className="text-uppercase fw-bold mb-2">Contato</h4>

                        <p>
                            <i className="bi bi-geo me-3"></i>Av: Brasil
                        </p>

                        <p>
                            <i className="bi bi-envelope me-3"></i>email@gmail.com
                        </p>

                        <p>
                            <i className="bi bi-phone me-3"></i>55-64821245
                        </p>

                    </div>


                </div>    
            </div>
        </section>



        <div className={"end  text-center p-2 " + darkMode}>
            <Link className="text-reset fw-bold" to="#" > BiblioTech </Link>
              2023© Copyright
        </div>

        </footer>
        </>
    )
}

