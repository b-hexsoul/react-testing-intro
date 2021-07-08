import React from 'react';
import Counter from './Counter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('The h1 should renders with correct text', () => {
  const component = render(<Counter />);
  const headerEl = component.getByTestId('header');
  expect(headerEl.textContent).toBe('Counter');
});

test('The count text should initialize with 0', () => {
  const component = render(<Counter />);
  const countEl = component.getByTestId('count');
  expect(countEl.textContent).toBe(0);
});

test('The minus button should have correct text', () => {
  const component = render(<Counter />);
  const minusButton = component.getByTestId('minus-button');
  expect(minusButton.textContent).toBe('-');
});

test('The add button should have correct text', () => {
  const component = render(<Counter />);
  const addButton = component.getByTestId('add-button');
  expect(addButton.textContent).toBe('+');
});
