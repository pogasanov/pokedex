import {IPokemon} from "types";

interface IProps {
  pokemons: IPokemon[]
}

export default function PokemonList({pokemons}: IProps) {
  return <div>
    {pokemons.map(pokemon => (
      <div key={pokemon.id}>
        {pokemon.name}
      </div>
    ))}
  </div>
}
