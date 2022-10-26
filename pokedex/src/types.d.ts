export interface IStat {
  id: number
  name: string
  base_stat: number
}

export interface IPokemon {
  id: number
  name: string
  stats: IStat[]
}

export interface IType {
  id: number
  name: string
}

export interface ISpecies {
  id: number
  name: string
}

export interface IStatistic {
  species: ISpecies[],
  types: IType[],
  unique_pokemons: number
}
