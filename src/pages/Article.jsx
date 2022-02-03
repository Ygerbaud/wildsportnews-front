import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pubbandeau from '../assets/Pub_rennes.jpg';
import './article.css';

const Article = () => {
  const { id } = useParams();
  const [selectedArticle, setSelectedArticle] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles/${id}`)
      .then((res) => setSelectedArticle(res.data[0]))
      .catch((error) => console.error(error));
  }, []);
  return selectedArticle ? (
    <>
      <div className="text-center my-4">
        <img src={Pubbandeau} alt="Pub" />
      </div>
      <section className=" text-center article my-5">
        <img
          src={`${process.env.REACT_APP_LOCAL_URL}${selectedArticle.image}`}
          className="img-fluid"
          alt="Responsive image"
        ></img>
        <div>
          <h1 className=" text-center my-3">{selectedArticle.titre}</h1>
        </div>
        <p className="text-center articletext">{selectedArticle.textcomplet}</p>
      </section>
      <section></section>
    </>
  ) : null;
};

export default Article;
