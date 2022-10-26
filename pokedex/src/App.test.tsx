import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

jest.mock("./lib/api");

test('renders pokemon list', async () => {
  render(<App/>);
  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();
});

test('search for pokemon', async () => {
  render(<App/>);
  const input = screen.getByLabelText(/Введите имя покемона/i)
  fireEvent.change(input, {target: {value: 'Kachu'}})
  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();
});
