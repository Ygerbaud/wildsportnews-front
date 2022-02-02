import React from 'react';
import { useParams } from 'react-router-dom';
import Articles from '../components/Articles';
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
      <TopArticle />
      <div>mettre un séparateur </div>
      <h3>Plus de news</h3>
      <div className="row ">
        {AllArticles.map((article) => (
          <Articles key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
