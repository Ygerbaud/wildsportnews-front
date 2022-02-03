import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './topArticle.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import { useParams } from 'react-router-dom';

const TopArticle = () => {
  const [topArticle, setTopArticle] = useState(null);
  const authContext = useContext(AuthContext);
  const [id, setId] = useState(1);

  const { sport } = useParams();
  useEffect(() => {
    if (sport === 'Rugby') setId(6);
    else setId(1);
  }, [sport]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles/${id}`)
      .then((res) => setTopArticle(res.data[0]))
      .catch((error) => console.error(error));
  }, [id]);
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
              to={`/${topArticle.name}/article/${topArticle.id}`}
            >
              <Button
                className="col-md-4 text-center"
                variant="outline-secondary"
              >
                Voir la suite
              </Button>
            </Link>
          ) : (
            <div className="border acces text-center">
              <p>
                Le contenue de cet articles est resérvé au compte Premium : Pour
                y acceder veuillez vous connecter ou vous inscrire
              </p>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  ) : null;
};

export default TopArticle;
