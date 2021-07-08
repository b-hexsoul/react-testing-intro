import React from 'react';
import Counter from './Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('The header should renders with correct text', () => {
  const component = render(<Counter />);
  const headerEl = component.getByTestId('header');
  expect(headerEl.textContent).toBe('Counter');
});

test('counter initially start with text of 0', () => {
  const component = render(<Counter />);
  const countEl = component.getByTestId('counter');
  expect(countEl.textContent).toBe('0');
});

test('The input has initial value of 1', () => {
  const component = render(<Counter />);
  const inputEl = component.getByTestId('input');
  expect(inputEl.value).toBe('1');
});

test('The minus button renders with -', () => {
  const component = render(<Counter />);
  const minusButton = component.getByTestId('minus-button');
  expect(minusButton.textContent).toBe('-');
});

test('The add button renders with +', () => {
  const component = render(<Counter />);
  const addButton = component.getByTestId('add-button');
  expect(addButton.textContent).toBe('+');
});
