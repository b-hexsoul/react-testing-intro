import React from 'react';
import Counter from './Counter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('The h1 should renders with correct text', () => {
  const component = render(<Counter />);
  const headerEl = component.getByTestId('header');
  expect(headerEl.textContent).toBe('Counter');
});
