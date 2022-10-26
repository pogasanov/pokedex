import PokemonList from "components/PokemonList/PokemonList";
import Statistic from "components/Statistic/Statistic";
import {getListOfPokemons, getStatistic} from "lib/api";
import React, {useEffect, useState} from 'react';
import './App.css';
import {IPokemon, IStatistic} from "types";

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [search, setSearch] = useState('')
  const [statistic, setStatistic] = useState<IStatistic | null>(null)

  useEffect(() => {
    getListOfPokemons(search).then(res => setPokemons(res))
  }, [search])

  useEffect(() => {
    getStatistic().then(res => setStatistic(res))
  }, [])

  return (
    <div className="App">
      {statistic && <Statistic
        pokemons={statistic.unique_pokemons}
        species={statistic.species.length}
        types={statistic.types.length}
      />}
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
