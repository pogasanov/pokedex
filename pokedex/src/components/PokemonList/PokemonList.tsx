import {IPokemon} from "types";

interface IProps {
  pokemons: IPokemon[]
}

export default function PokemonList({pokemons}: IProps) {
  return <div>
    {pokemons.map(pokemon => (
      <div key={pokemon.id}>
        <div>
          Name: {pokemon.name}
        </div>
        <div>
          Stats: {pokemon.stats.map(s => (<div key={s.id}>{s.name}: {s.base_stat}</div>))}
        </div>
      </div>
    ))}
  </div>
}
