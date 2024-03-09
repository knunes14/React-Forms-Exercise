import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

test('renders BoxList without crashing', () => {
  render(<BoxList />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test('adds a new box when form is submitted', () => {
  const { getByLabelText, getByText } = render(<BoxList />);
  
  fireEvent.change(getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Height:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Background Color:'), { target: { value: 'red' } });
  fireEvent.submit(getByText('Add Box'));
  
  expect(getByText('X')).toBeInTheDocument();
});

test('removes a box when X button is clicked', () => {
  const { getByText, queryByText } = render(<BoxList />);
  
  fireEvent.change(getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Height:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Background Color:'), { target: { value: 'red' } });
  fireEvent.submit(getByText('Add Box'));
  
  fireEvent.click(getByText('X'));
  
  expect(queryByText('X')).not.toBeInTheDocument();
});