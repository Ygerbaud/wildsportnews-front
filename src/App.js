import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './pages/Article';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:sport" element={<Home />} />
        <Route path="/:sport/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
