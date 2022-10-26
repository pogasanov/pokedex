import {SPECIES_MOCKS, TYPES_MOCKS} from "mocks";
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './Filter';

test('renders list of types', () => {
  const props = {
    types: TYPES_MOCKS,
    species: SPECIES_MOCKS,
    onChange: () => {}
  }
  render(<App {...props}/>);
  expect(screen.getByLabelText(/normal/i)).toBeInTheDocument();
});

test('renders list of species', () => {
  const props = {
    types: TYPES_MOCKS,
    species: SPECIES_MOCKS,
    onChange: () => {}
  }
  render(<App {...props}/>);
  expect(screen.getByLabelText(/normal/i)).toBeInTheDocument();
});

test('submits when button is clicked', () => {
  const props = {
    types: TYPES_MOCKS,
    species: SPECIES_MOCKS,
    onChange: jest.fn()
  }
  render(<App {...props}/>);
  fireEvent.submit(screen.getByRole('button', {name: /submit/i}))
  expect(props.onChange).toBeCalled();
});
