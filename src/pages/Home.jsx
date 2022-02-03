import React from 'react';
import { useParams } from 'react-router-dom';
import Articles from '../components/Articles';
import Live from '../components/Live';
import TopArticle from '../components/TopArticle';

const AllArticles = [
  {
    id: 1,
    titre: 'titre',
    resume: 'voila le résumé',
    image: './images/Ndombele.jpg',
    name: 'football',
  },
  {
    id: 2,
    titre: 'titre',
    resume: 'voila le résumé',
    image: './images/Ndombele.jpg',
    name: 'football',
  },
  {
    id: 3,
    titre: 'titre',
    resume: 'voila le résumé',
    image: './images/Ndombele.jpg',
    name: 'football',
  },
  {
    id: 4,
    titre: 'titre',
    resume: 'voila le résumé',
    image: './images/Ndombele.jpg',
    name: 'football',
  },
];
const Home = () => {
  const { sport } = useParams();
  console.log(sport);
  return (
    <div>
      <div>pub</div>
      <TopArticle />
      <div>mettre un séparateur </div>
      <h1 className="text-danger ms-4 font-weight-bold border-bottom w-25 ">
        Plus d&apos;infos
      </h1>
      <div className="row ">
        <div className="col-8 ">
          <div className="row ">
            {AllArticles.map((article) => (
              <Articles key={article.id} article={article} />
            ))}
          </div>
        </div>
        <Live />
      </div>
    </div>
  );
};

export default Home;
