import React from "react";
import { Container, Navbar, Nav, Carousel, Accordion, Card } from "react-bootstrap";
import "./Sobre.css";
import { Footer } from "../../components/Footer/Footer";

export function Sobre() {
  return (
    <>
      <Navbar className="bar" >
        <Container>
          <Navbar.Brand href="/">BLIBLIOTECH</Navbar.Brand>
          <Nav className="me">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Quiz">Quiz</Nav.Link>
            <Nav.Link href="/livros">Livros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="imgcarosel d-block w-100"
          src="https://static.xx.fbcdn.net/assets/?revision=1329671031208790&name=desktop-names-on-facebook-banner&density=1"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="imgcarosel d-block w-100"
          src="https://static.xx.fbcdn.net/assets/?revision=1329671031208790&name=desktop-your-privacy-banner&density=1"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgcarosel d-block w-100"
          src="https://static.xx.fbcdn.net/assets/?revision=1329671031208790&name=desktop-your-home-page-banner&density=1"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="ajuda">
        <h1>Como podemos ajudar você?</h1>
    </div>

    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Configurações da Conta</Accordion.Header>
        <Accordion.Body>
        É possível gerenciar as configurações da sua conta do Blibliotec a qualquer momento. Atualize as suas informações de contato, edite as suas configurações, altere o seu nome de usuário ou escolha um contato herdeiro para a sua conta.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Privacidade e Segurança</Accordion.Header>
        <Accordion.Body>
        Você pode usar a Verificação de Privacidade para analisar e ajustar as suas configurações a fim de garantir que está compartilhando conteúdo com quem deseja. Para garantir que continua compartilhando conteúdo com quem deseja, recomendamos que você verifique regularmente o público que pode ver as suas publicações e as informações do seu perfil. Os atalhos de privacidade também oferecem o acesso rápido às configurações de privacidade.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Login e Senha</Accordion.Header>
        <Accordion.Body>
        Se você tem uma conta do Blibliotech e não consegue entrar, tente redefinir sua senha. Se você ainda estiver com problemas, experimente estas dicas.
        Se você não tem uma conta do Facebook, saiba como cadastrar-se.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Privacidade e Senha</Accordion.Header>
        <Accordion.Body>
        Você pode usar a Verificação de Privacidade para analisar e ajustar as suas configurações a fim de garantir que está compartilhando conteúdo com quem deseja.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Card>
      <Card.Header>Citações</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Manter as pessoas seguras e causar um impacto positivo
            {' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    <Card>
      <Card.Header>Citações</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Aproximando as pessoas todos os dias
            {' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    <footer>
        <Footer/>
    </footer>
    
    </>
  );
}
