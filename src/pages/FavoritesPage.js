import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <p>No favorites selected yet.</p>
      ) : (
        <ul>
          {favorites.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;

