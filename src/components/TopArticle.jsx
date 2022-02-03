import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const TopArticle = () => {
  const [topArticle, setTopArticle] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles/1`)
      .then((res) => setTopArticle(res.data[0]))
      .catch((error) => console.error(error));
  }, []);

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
          {/* <Button className="center" variant="outline-secondary">
          Connexion
        </Button> */}
          <LinkContainer
            className=""
            key={topArticle.id}
            to={`/article/${topArticle.id}`}
          >
            <Button
              className="col-md-4 text-center"
              variant="outline-secondary"
            >
              Voir la suite
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  ) : null;
};

export default TopArticle;
