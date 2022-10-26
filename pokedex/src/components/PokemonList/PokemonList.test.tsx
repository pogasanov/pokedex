import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './PokemonList';

test('renders list of pokemons', () => {
  const pokemons = [
    {
      id: 1,
      name: 'pikachu'
    }
  ]
  render(<App pokemons={pokemons}/>);
  expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
});
