import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const NavigationBar = () => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles/categories`)
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  const [categories, setCategories] = useState(null);
  return categories ? (
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
                  <Nav.Link className="mx-4" key={categorie.id}>
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
  ) : null;
};

export default NavigationBar;
