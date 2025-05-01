import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext'; // ✅ use the right context

const PokemonCard = ({ pokemon }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext); // ✅ from correct context

  const id = pokemon.url.split('/')[6];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const isFav = favorites.includes(pokemon.name);

  const toggleFavorite = () => {
    if (isFav) {
      removeFavorite(pokemon.name);
    } else {
      addFavorite(pokemon.name);
    }
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '150px',
      textAlign: 'center',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none' }}>
        <img src={imgUrl} alt={pokemon.name} />
        <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      </Link>
      <button onClick={toggleFavorite} style={{
        backgroundColor: isFav ? 'red' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer'
      }}>
        {isFav ? '★' : '☆'}
      </button>
    </div>
  );
};

export default PokemonCard;

