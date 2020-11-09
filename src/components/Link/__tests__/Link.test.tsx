import React from 'react';
import { render } from '@testing-library/react';
import Link from '../Link';

describe('Link', () => {
  describe('with `newTab` prop', () => {
    it('has `_blank` target attribute', async () => {
      const { findByTestId } = render(
        <Link testId="Test__Link" newTab href="/">
          Hello, World!
        </Link>
      );

      const link = await findByTestId('Test__Link');

      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  describe('without `newTab` prop', () => {
    it('does not have a target attribute', async () => {
      const { findByTestId } = render(
        <Link testId="Test__Link" href="/">
          Hello, World!
        </Link>
      );

      const link = await findByTestId('Test__Link');

      expect(link).not.toHaveAttribute('target');
    });
  });
});
