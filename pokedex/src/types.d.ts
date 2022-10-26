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
