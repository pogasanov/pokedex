import {POKEMONS_MOCKS, SPECIES_MOCKS, TYPES_MOCKS} from "mocks";
import {IPokemon, IStatistic} from "types";

export async function getListOfPokemons(name: string): Promise<IPokemon[]> {
  return Promise.resolve(POKEMONS_MOCKS.filter(s => s.name.toLowerCase().includes(name.toLowerCase()))
  )
}

export async function getStatistic(): Promise<IStatistic> {
  return Promise.resolve({species: SPECIES_MOCKS, types: TYPES_MOCKS, unique_pokemons: POKEMONS_MOCKS.length})
}
