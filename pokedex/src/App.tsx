import PokemonList from "components/PokemonList/PokemonList";
import {getListOfPokemons} from "lib/api";
import React, {useEffect, useState} from 'react';
import './App.css';
import {IPokemon} from "types";

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  useEffect(() => {
    getListOfPokemons().then(res => setPokemons(res))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <PokemonList pokemons={pokemons}/>
      </header>
    </div>
  );
}

export default App;
