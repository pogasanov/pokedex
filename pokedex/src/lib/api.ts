import {request, gql} from 'graphql-request'
import {IPokemon, IStatistic} from "types";

const BASE_URL = 'https://beta.pokeapi.co/graphql/v1beta'

export async function getListOfPokemons(name?: string): Promise<IPokemon[]> {
  const data = await request(BASE_URL, gql`
  query getPokemons($name: String) {
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

export async function getStatistic(): Promise<IStatistic> {
  const data = await request(BASE_URL, gql`
  {
    pokemon_v2_pokemonspecies {
      id
      name
    }
    pokemon_v2_type {
      name
      id
    }
    pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
  `)
  return {
    species: data.pokemon_v2_pokemonspecies,
    types: data.pokemon_v2_type,
    unique_pokemons: data.pokemon_v2_pokemon_aggregate.aggregate.count
  }
}
