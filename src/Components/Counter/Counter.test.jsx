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

test('Change value of input works', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  expect(inputEl.value).toBe('5');
});

test('Click minus button decreases count', () => {
  const { getByTestId } = render(<Counter />);
  const count = getByTestId('counter');
  const minusButton = getByTestId('minus-button');

  expect(count.textContent).toBe('0');
  fireEvent.click(minusButton);
  expect(count.textContent).toBe('-1');
});

test('Click add button increases count', () => {
  const { getByTestId } = render(<Counter />);
  const count = getByTestId('counter');
  const addButton = getByTestId('add-button');

  expect(count.textContent).toBe('0');
  fireEvent.click(addButton);
  expect(count.textContent).toBe('1');
});

test('Change input value and click add button increases count', () => {
  const { getByTestId } = render(<Counter />);
  const count = getByTestId('counter');
  const addButton = getByTestId('add-button');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });
  expect(inputEl.value).toBe('5');

  expect(count.textContent).toBe('0');
  fireEvent.click(addButton);
  expect(count.textContent).toBe('5');
});
