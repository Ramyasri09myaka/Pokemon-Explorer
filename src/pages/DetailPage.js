import React from 'react';
import { useParams } from 'react-router-dom';
import usePokemon from '../hooks/usePokemon';

const DetailPage = () => {
  const { name } = useParams();
  const { data: pokemon, loading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (loading) return <p>Loading...</p>;
  if (!pokemon) return <p>No data found</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>Stats</h3>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map(a => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>
      <h3>Moves</h3>
      <ul style={{ columns: 2 }}>
        {pokemon.moves.slice(0, 20).map(m => (
          <li key={m.move.name}>{m.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailPage;

