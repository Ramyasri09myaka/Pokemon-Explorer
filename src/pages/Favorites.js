import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import PokemonCard from "../components/PokemonCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorite Pokémon</h1>
      <div>
        {favorites.length > 0 ? (
          favorites.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} />)
        ) : (
          <p>No favorite Pokémon yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;

