import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        let data = await response.json();

        let detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            let res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(detailedPokemons);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch Pokémon");
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());
  const handleTypeChange = (e) => setTypeFilter(e.target.value);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearch = pokemon.name.includes(searchTerm);
    const matchesType =
      typeFilter === "All" || pokemon.types.some((t) => t.type.name === typeFilter.toLowerCase());

    return matchesSearch && matchesType;
  });

  return (
    <div className="App">
      <Header />
      <div className="controls">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <TypeFilter onTypeChange={handleTypeChange} />
      </div>

      {loading && <p>Loading Pokémon...</p>}
      {error && <p>{error}</p>}

      {!loading && filteredPokemons.length === 0 && <p>No Pokémon found!</p>}
      
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;

