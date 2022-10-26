export interface IPokemon {
  id: number
  name: string
}

interface IProps {
  pokemons: IPokemon[]
}

export default function PokemonList({pokemons}: IProps) {
  return <div>
    {pokemons.map(pokemon => (
      <div>
        {pokemon.name}
      </div>
    ))}
  </div>
}
