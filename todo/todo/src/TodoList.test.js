import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList without crashing', () => {
  render(<TodoList />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test('adds a new todo when form is submitted', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  
  const input = getByPlaceholderText('Enter a new todo');
  fireEvent.change(input, { target: { value: 'Example task' } });
  fireEvent.submit(getByText('Add Todo'));
  
  expect(getByText('Example task')).toBeInTheDocument();
});

test('removes a todo when X button is clicked', () => {
  const { getByText, queryByText } = render(<TodoList />);
  
  const input = getByText('Example task');
  fireEvent.click(input.nextElementSibling); // Click on the 'X' button
  
  expect(queryByText('Example task')).not.toBeInTheDocument();
});