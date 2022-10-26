import {POKEMONS_MOCKS} from "mocks";

export async function getListOfPokemons(name: string) {
  return Promise.resolve(POKEMONS_MOCKS.filter(s => s.name.toLowerCase().includes(name.toLowerCase()))
  )
}
