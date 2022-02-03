import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import Modal from 'react-modal/lib/components/Modal';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

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
  const [modalConnexionIsOpen, setModalConnexionIsOpen] = React.useState(false);
  const [modalInscriptionIsOpen, setModalInscriptionIsOpen] =
    React.useState(false);

  function openModalconnexion() {
    setModalConnexionIsOpen(true);
  }
  function closeModalconnexion() {
    setModalConnexionIsOpen(false);
  }
  function openModalInscription() {
    setModalInscriptionIsOpen(true);
  }
  function closeModalInscription() {
    setModalInscriptionIsOpen(false);
    setMsg('');
  }

  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  // const [favorite, setFavorite] = useState('');

  const getAuth = () => {
    authContext
      .loginUser(email, password)
      .then((res) => {
        if (res == 'ValidateAuth') {
          closeModalconnexion();
        } else {
          setMsg(res);
        }
      })
      .catch((err) => err);
  };

  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,}$/;

  const checkPassword = () => {
    if (regex.test(password) === false) {
      setMsg(
        'Le mot doit passe doit contenir minimum 8 charactères, une majuscule, une minuscule, un chiffre et un charactère spécial'
      );
    } else {
      createUser();
    }
  };
  /**
   * Création de l'utilisateurs dans la BDD
   */
  const createUser = () => {
    authContext
      .createUser(email, password)
      .then((res) => {
        if (res == 'ValidateLogin') {
          setMsg('Inscription réussi,veuillez vous connecter.');
        } else {
          setMsg(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return categories ? (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link className=" mx-6 font-weight-bold " to="/">
            <Navbar.Brand className=" mx-6 font-weight-bold ">
              WildNewSports
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="ms-5justify-content-center"
            id="navbarScroll"
          >
            <Nav
              className="  mx-5 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {categories.map((categorie) => (
                <Link
                  className="mx-4"
                  key={categorie.id}
                  to={`/${categorie.name}`}
                >
                  {categorie.name}
                </Link>
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
            {!authContext.uuid ? (
              <div>
                <Button
                  onClick={openModalconnexion}
                  className="justify-content-end mx-1 "
                  variant="dark"
                >
                  Connexion
                </Button>
                <Button
                  onClick={openModalInscription}
                  className="justify-content-end mx-1"
                  variant="dark"
                >
                  Inscription
                </Button>
              </div>
            ) : (
              <Button
                onClick={openModalconnexion}
                className="justify-content-end mx-1 "
                variant="dark"
              >
                Deconnexion
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Modal
        isOpen={modalConnexionIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Connexion</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Label>{msg}</Form.Label>
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            className="mx-1"
            onClick={() => getAuth()}
          >
            Submit
          </Button>
          <Button
            onClick={closeModalconnexion}
            variant="primary"
            type="button"
            className="mx-1"
          >
            Close
          </Button>
        </Form>
      </Modal>
      <Modal
        isOpen={modalInscriptionIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Inscription</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <Form.Label>Favorit Sport</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value=
              onChange={(event) => setFavorite(event.target.value)}
            /> */}
            <Form.Label>{msg}</Form.Label>
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className="mx-1"
            onClick={() => checkPassword()}
          >
            Submit
          </Button>
          <Button
            onClick={closeModalInscription}
            variant="primary"
            className="mx-1"
            type="button"
          >
            Close
          </Button>
        </Form>
      </Modal>
    </div>
  ) : null;
};

export default NavigationBar;
