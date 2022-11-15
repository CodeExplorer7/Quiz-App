import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

it('renders first question properly', () => {
  render(<App />);
  const question = screen.getByText('Столица США?');
  expect(question).toBeInTheDocument();
});
