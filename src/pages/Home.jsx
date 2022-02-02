import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { sport} = useParams();
  return <div>home</div>;
};

export default Home;
