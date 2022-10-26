export async function getListOfPokemons(name?: string) {
  return Promise.resolve([
    {
      id: 1,
      name: 'pikachu'
    },
    {
      id: 2,
      name: 'bulbasaur'
    }
  ])
}
