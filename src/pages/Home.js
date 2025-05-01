import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState('id');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then(res => {
        setAllPokemon(res.data.results);
      });
  }, []);

  useEffect(() => {
    let sorted = [...allPokemon];

    if (sortOrder === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'id') {
      sorted.sort((a, b) => {
        const aid = a.url.split('/')[6];
        const bid = b.url.split('/')[6];
        return Number(aid) - Number(bid);
      });
    }

    setFiltered(sorted);
  }, [sortOrder, allPokemon]);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filtered.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <label>Items per page: </label>
        <select onChange={e => setItemsPerPage(Number(e.target.value))} value={itemsPerPage}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>

        <label style={{ marginLeft: 20 }}>Sort by: </label>
        <select onChange={e => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="id">ID</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {currentItems.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next</button>
      </div>
    </div>
  );
};

export default Home;

