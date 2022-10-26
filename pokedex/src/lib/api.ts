import {request, gql} from 'graphql-request'
import {IPokemon} from "types";

const BASE_URL = 'https://beta.pokeapi.co/graphql/v1beta'

export async function getListOfPokemons(name?: string): Promise<IPokemon[]> {
  const data = await request(BASE_URL, gql`
  query samplePokeAPIquery($name: String) {
    pokemon_v2_pokemon(where: {name: {_ilike: $name}}) {
      id
      name
      pokemon_v2_pokemonstats {
        id
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
  `, {
    name: `%${name ?? ''}%`
  })
  return data.pokemon_v2_pokemon.map((p: any) => ({
    id: p.id,
    name: p.name,
    stats: p.pokemon_v2_pokemonstats.map((s: any) => ({
      base_stat: s.base_stat,
      name: s.pokemon_v2_stat.name
    }))
  }))
}
