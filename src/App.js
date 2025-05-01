import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import DetailPage from './pages/DetailPage';
import ComparePage from './pages/ComparePage';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Pokémon Explorer</h1>
      <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/" style={{ margin: '0 15px' }}>Home</Link>
        <Link to="/favorites" style={{ margin: '0 15px' }}>Favorites</Link>
        <Link to="/compare" style={{ margin: '0 15px' }}>Compare</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<DetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </div>
  );
}

export default App;

