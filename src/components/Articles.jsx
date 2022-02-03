import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Articles = ({ article }) => {
  return (
    <Card className="m-5  p-0 shadow col-5">
      <Card.Img variant="top" src={article.image} />
      <Card.Body>
        <Card.Title>{article.titre}</Card.Title>
        <Card.Text>{article.resume}</Card.Text>
        <Link
          className=""
          key={article.id}
          to={`${article.name}/article/${article.id}`}
        >
          <Button className="col-md-4 " variant="outline-secondary">
            Voir la suite
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

Articles.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    resume: PropTypes.any,
    titre: PropTypes.any,
  }),
};

export default Articles;
