import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm without crashing', () => {
  render(<NewBoxForm />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
