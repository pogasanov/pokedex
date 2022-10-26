import {request, gql} from 'graphql-request'
import {IPokemon} from "types";

const BASE_URL = 'https://beta.pokeapi.co/graphql/v1beta'

export async function getListOfPokemons(name?: string): Promise<IPokemon[]> {
  const data = await request(BASE_URL, gql`
  query samplePokeAPIquery($name: String) {
    pokemon_v2_pokemon(where: {name: {_ilike: $name}}) {
      id
      name
    }
  }
  `, {
    name: `%${name ?? ''}%`
  })
  return data.pokemon_v2_pokemon
}
