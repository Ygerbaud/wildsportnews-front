import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const categories = [
  {
    id: 1,
    name: 'Football',
    logo: './images/football',
  },
  {
    id: 2,
    name: 'Rugby',
    logo: './images/football',
  },
  {
    id: 3,
    name: 'Basketball',
    logo: './images/football',
  },
  {
    id: 4,
    name: 'Formule1',
    logo: './images/football',
  },
  {
    id: 5,
    name: 'Handball',
    logo: './images/football',
  },
];

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className=" mx-6  " href="/">
            WildNewSports
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-center" id="navbarScroll">
            <Nav
              className="  mx-5 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {categories.map((categorie) => (
                <LinkContainer
                  className=""
                  key={categorie.id}
                  to={`/${categorie.name}`}
                >
                  <Nav.Link
                    className="mx-4"
                    key={categorie.id}
                    href={`/${categorie.name}`}
                  >
                    {categorie.name}
                  </Nav.Link>
                </LinkContainer>
              ))}
            </Nav>
            <Navbar.Collapse />
            <Nav className="justify-content-end  ">
              <Form className="d-flex ms-6  ">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="ms-6"
                  aria-label="Search"
                />
                <Button className=" mx-4 " variant="outline-secondary">
                  Search
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Button className="justify-content-end " variant="dark">
              Connexion
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
