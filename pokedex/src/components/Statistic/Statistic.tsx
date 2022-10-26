interface IProps {
  pokemons: number
  species: number
  types: number
}

export default function Statistic({pokemons, species, types}: IProps) {
  return (
    <div>
      <div>
        Pokemons: {pokemons}
      </div>
      <div>
        Types: {types}
      </div>
      <div>
        Species: {species}
      </div>
    </div>
  )
}
