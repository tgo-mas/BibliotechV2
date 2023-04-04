import React from "react";
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Politica.css'

const BsTabs = () => {
    return(
    <Container className="py-4">
        <Row className="justify-content-center">
            <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
            <Tab eventKey="tab-1"  title="Seção 1">
            O Bibliotech reserva-se o direito de alterar esta Política de Privacidade a qualquer momento. Se fizermos alterações significativas nesta política, notificaremos você por meio de uma mensagem na plataforma ou por e-mail. Encorajamos você a revisar periodicamente esta política para estar ciente das informações coletadas, como são utilizadas e compartilhadas e como são protegidas.
            </Tab>
            <Tab eventKey="tab-2"  title="Seção 2">
            O Bibliotech implementa medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, perda, uso indevido e alteração. No entanto, nenhuma transmissão de dados pela Internet ou armazenamento eletrônico é completamente segura, portanto, não podemos garantir a segurança absoluta das informações pessoais.
            </Tab>
            <Tab eventKey="tab-3"  title="Seção 3">
            O Bibliotech coleta informações pessoais, como nome, endereço de e-mail e senha, quando você se cadastra na plataforma. Além disso, podemos coletar informações sobre os livros que você adiciona à sua biblioteca, os comentários que você faz e outras interações que você tem com a plataforma. Também podemos coletar informações de dispositivos que você utiliza para acessar o Bibliotech, como o endereço IP, o tipo de navegador e o sistema operacional.
            </Tab>
            </Tabs>
        </Row>
    </Container>
    )
}

export default BsTabs;