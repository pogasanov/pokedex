import PokemonList from "components/PokemonList/PokemonList";
import {getListOfPokemons} from "lib/api";
import React, {useEffect, useState} from 'react';
import './App.css';
import {IPokemon} from "types";

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getListOfPokemons(search).then(res => setPokemons(res))
  }, [search])

  return (
    <div className="App">
      <label htmlFor="search">Введите имя покемона</label>
      <input
        id="search"
        type="text"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
