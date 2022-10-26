import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

jest.mock("./lib/api");

test('renders pokemon list', async () => {
  render(<App/>);
  await waitFor(() => {
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  })
});
