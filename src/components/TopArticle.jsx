import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import './topArticle.css';

const TopArticle = () => {
  const [topArticle, setTopArticle] = useState(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles/1`)
      .then((res) => setTopArticle(res.data[0]))
      .catch((error) => console.error(error));
  }, []);
  console.log(authContext.uuid);
  return topArticle ? (
    <>
      <h1 className="text-danger ms-4 font-weight-bold border-bottom w-25 ">
        Les dernieres infos
      </h1>
      <Card className="m-5 shadow-sm col-9">
        <Card.Img variant="top" src={topArticle.image} />
        <Card.Body>
          <Card.Title>{topArticle.titre}</Card.Title>
          <Card.Text>{topArticle.resume}</Card.Text>
          {authContext.uuid ? (
            <Link
              className=""
              key={topArticle.id}
              to={`article/${topArticle.id}`}
            >
              <Button
                className="col-md-4 text-center"
                variant="outline-secondary"
              >
                Voir la suite
              </Button>
            </Link>
          ) : (
            <div className=" text-center acces border font-weight-bold">
              <p>
                Le contenu de cet article est resérvé au compte Premium : Pour y
                acceder veuillez vous connecter ou vous inscrire
              </p>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  ) : null;
};

export default TopArticle;
