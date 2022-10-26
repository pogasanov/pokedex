import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

jest.mock("./lib/api");

test('renders pokemon list', async () => {
  render(<App/>);
  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();
});
