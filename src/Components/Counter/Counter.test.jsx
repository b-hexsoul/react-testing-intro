import React from 'react';
import Counter from './Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test('The header should renders with correct text', () => {
  const headerEl = getByTestId('header');
  expect(headerEl.textContent).toBe('Counter');
});

test('counter initially start with text of 0', () => {
  const countEl = getByTestId('counter');
  expect(countEl.textContent).toBe('0');
});

test('The input has initial value of 1', () => {
  const inputEl = getByTestId('input');
  expect(inputEl.value).toBe('1');
});

test('The minus button renders with -', () => {
  const minusButton = getByTestId('minus-button');
  expect(minusButton.textContent).toBe('-');
});

test('The add button renders with +', () => {
  const addButton = getByTestId('add-button');
  expect(addButton.textContent).toBe('+');
});

test('Change value of input works', () => {
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  expect(inputEl.value).toBe('5');
});

test('Click minus button decreases count', () => {
  const count = getByTestId('counter');
  const minusButton = getByTestId('minus-button');

  expect(count.textContent).toBe('0');
  fireEvent.click(minusButton);
  expect(count.textContent).toBe('-1');
});

test('Click add button increases count', () => {
  const count = getByTestId('counter');
  const addButton = getByTestId('add-button');

  expect(count.textContent).toBe('0');
  fireEvent.click(addButton);
  expect(count.textContent).toBe('1');
});

test('Change input value and click add button increases count', () => {
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

test('Change input value and click minus button increases count', () => {
  const count = getByTestId('counter');
  const minusButton = getByTestId('minus-button');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });
  expect(inputEl.value).toBe('5');

  expect(count.textContent).toBe('0');
  fireEvent.click(minusButton);
  expect(count.textContent).toBe('-5');
});

test('Counter style changes with button clicks', () => {
  const count = getByTestId('counter');
  const inputEl = getByTestId('input');
  const addButton = getByTestId('add-button');
  const minusButton = getByTestId('minus-button');

  expect(count.className).toBe('');

  fireEvent.change(inputEl, {
    target: {
      value: '50',
    },
  });
  expect(inputEl.value).toBe('50');
  fireEvent.click(addButton);
  expect(count.className).toBe('');
  fireEvent.click(addButton);
  expect(count.className).toBe('green');
  fireEvent.click(addButton);
  expect(count.className).toBe('green');

  fireEvent.click(minusButton);
  fireEvent.click(minusButton);
  fireEvent.click(minusButton);
  fireEvent.click(minusButton);
  fireEvent.click(minusButton);
  expect(count.className).toBe('red');
});
