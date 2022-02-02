import React from 'react';
import { useParams } from 'react-router-dom';
import TopArticle from '../components/TopArticle';

const Home = () => {
  const { sport } = useParams();
  console.log(sport);
  return (
    <div>
      <TopArticle />
    </div>
  );
};

export default Home;
