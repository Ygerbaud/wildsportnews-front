import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { AuthContext } from '../contexts/authContext';
import Articles from '../components/Articles';
import Live from '../components/Live';
import TopArticle from '../components/TopArticle';
import Pubbandeau from '../assets/Pub_rennes.jpg';
const Home = () => {
  const { sport } = useParams();
  const [AllArticles, setAllArticles] = useState(null);
  // const authContext = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/articles`)
      .then((res) => setAllArticles(res.data))
      .catch((error) => console.error(error));
  }, []);
  return AllArticles ? (
    <div>
      <div className="text-center my-4">
        <img src={Pubbandeau} alt="Pub" />
      </div>
      <TopArticle />
      <div className="border-top"></div>
      <h1 className="text-danger ms-4 font-weight-bold border-bottom w-25 ">
        Plus d&apos;infos
      </h1>
      <div className="row ">
        <div className="col-8 ">
          <div className="row ">
            {sport
              ? AllArticles.filter((el) => el.name === sport).map((article) => (
                  <Articles key={article.id} article={article} />
                ))
              : AllArticles.map((article) => (
                  <Articles key={article.id} article={article} />
                ))}
          </div>
        </div>
        <Live />
      </div>
    </div>
  ) : null;
};

export default Home;
