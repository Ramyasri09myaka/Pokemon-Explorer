import React, { useState } from 'react';
import usePokemon from '../hooks/usePokemon';

const ComparePage = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  const firstUrl = first ? `https://pokeapi.co/api/v2/pokemon/${first}` : null;
  const secondUrl = second ? `https://pokeapi.co/api/v2/pokemon/${second}` : null;

  const firstData = usePokemon(firstUrl);
  const secondData = usePokemon(secondUrl);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Compare Pokémon</h2>
      <input
        placeholder="First Pokémon name"
        value={first}
        onChange={(e) => setFirst(e.target.value.toLowerCase())}
      />
      <input
        placeholder="Second Pokémon name"
        value={second}
        onChange={(e) => setSecond(e.target.value.toLowerCase())}
      />

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {[firstData, secondData].map((poke, idx) => (
          <div key={idx} style={{ width: '40%' }}>
            {poke.loading && <p>Loading...</p>}
            {poke.error && <p>Error loading Pokémon</p>}
            {poke.data && (
              <>
                <h3>{poke.data.name.toUpperCase()}</h3>
                <img src={poke.data.sprites.front_default} alt={poke.data.name} />
                <ul>
                  {poke.data.stats.map(stat => (
                    <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;

