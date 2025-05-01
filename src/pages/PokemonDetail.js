import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.error("Error fetching Pokémon data", error));
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>HP: {pokemon.stats[0].base_stat}</p>
      <p>Attack: {pokemon.stats[1].base_stat}</p>
      <p>Defense: {pokemon.stats[2].base_stat}</p>
      <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
    </div>
  );
};

export default PokemonDetail;

