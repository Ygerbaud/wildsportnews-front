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
import Modal from 'react-modal/lib/components/Modal';
import { LinkContainer } from 'react-router-bootstrap';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const NavigationBar = () => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles/categories`)
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  const [categories, setCategories] = useState(null);
  const [modalModifIsOpen, setModifIsOpen] = React.useState(false);

  function openModalModif() {
    setModifIsOpen(true);
  }
  // function closeModalmodif() {
  //   setModifIsOpen(false);
  // }

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
            <Button
              onClick={openModalModif}
              className="justify-content-end "
              variant="dark"
            >
              Connexion
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Modal
        isOpen={modalModifIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Connexion</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  ) : null;
};

export default NavigationBar;
