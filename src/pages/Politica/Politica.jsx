import React from "react";
import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";
import BsTabs from './BsTabs';


const Politica = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center my-4">Política de Privacidade</h1>
          <p>
            {" "}
            A sua privacidade é muito importante para nós. Por isso, criamos
            esta política de privacidade para explicar como coletamos,
            utilizamos, compartilhamos e protegemos as suas informações
            pessoais.
          </p>
          <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Seção 1</Accordion.Header>
          <Accordion.Body>
          Esta Política de Privacidade descreve como as informações pessoais dos usuários são coletadas, utilizadas, compartilhadas e protegidas pelo Bibliotech, uma plataforma online de compartilhamento de livros. Ao utilizar o Bibliotech, você concorda com as práticas descritas nesta política.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Seção 2</Accordion.Header>
          <Accordion.Body>
          O Bibliotech coleta informações pessoais, como nome, endereço de e-mail e senha, quando você se cadastra na plataforma. Além disso, podemos coletar informações sobre os livros que você adiciona à sua biblioteca, os comentários que você faz e outras interações que você tem com a plataforma. Também podemos coletar informações de dispositivos que você utiliza para acessar o Bibliotech, como o endereço IP, o tipo de navegador e o sistema operacional.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Seção 3</Accordion.Header>
          <Accordion.Body>
          O Bibliotech utiliza as informações pessoais coletadas para fornecer serviços e recursos da plataforma, personalizar sua experiência de uso, enviar comunicações de marketing e promoções, bem como monitorar e melhorar a qualidade dos nossos serviços. Também podemos utilizar as informações pessoais para fins legais, como cumprir obrigações contratuais, responder a processos legais e regulatórios e proteger nossos direitos e interesses.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
          <h2 className="mt-5 mb-3">Informações que coletamos</h2>
          <p>As informações que coletamos podem incluir:</p>
          <ListGroup>
            <ListGroup.Item>Informações pessoais</ListGroup.Item>
            <ListGroup.Item>Numeros de Documentos</ListGroup.Item>
            <ListGroup.Item>Numero do Cartao de Credito</ListGroup.Item>
            <ListGroup.Item>Email para enviar spam</ListGroup.Item>
            <ListGroup.Item>Endereço para importunaçao</ListGroup.Item>
          </ListGroup>
          <h2 className="mt-5 mb-3">Como utilizamos as informações</h2>
          <p>Utilizamos as informações para:</p>
          <ul>
            <li>Personalizar a sua experiência</li>
            <li>Melhorar os nossos serviços</li>
            <li>Enviar informações sobre produtos e serviços</li>
            <li>Realizar pesquisas de mercado</li>
          </ul>
          <h2 className="mt-5 mb-3">Compartilhamento das informações</h2>
          <p>
            Nós não compartilhamos as suas informações pessoais com terceiros,
            exceto em casos de:
          </p>
          <ul>
            <li>Solicitação judicial ou administrativa</li>
            <li>Prevenção de fraude ou atividade ilegal</li>
            <li>
              Proteção dos direitos, propriedade ou segurança da nossa empresa
              ou de terceiros
            </li>
          </ul>
          <h2 className="mt-5 mb-3">Proteção das informações</h2>
          <p>
            Adotamos medidas de segurança para proteger as suas informações
            pessoais contra acesso não autorizado, alteração, divulgação ou
            destruição. No entanto, não podemos garantir a segurança completa
            das informações transmitidas pela internet.
          </p>
          <h2 className="mt-5 mb-3">Atualizações da política de privacidade</h2>
          <p>
            Reservamos o direito de atualizar esta política de privacidade a
            qualquer momento. A última data de atualização será sempre indicada
            no início deste documento.
          </p>
          <p>
            Se tiver alguma dúvida ou preocupação sobre a nossa política de
            privacidade, por favor, entre em contato conosco.
          </p>
        </Col>
      </Row>
      
      <BsTabs/>

      <h5>Contato</h5>
      
      <h6>
      Se tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre as práticas de coleta, uso ou divulgação de informações pessoais pelo Bibliotech, entre em contato conosco pelo e-mail: contato@bibliotech.com
      </h6>
    </Container>
  );
};

export default Politica;
