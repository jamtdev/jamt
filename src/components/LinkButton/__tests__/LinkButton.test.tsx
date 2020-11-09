import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LinkButton from '../LinkButton';

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    return children;
  };
});

describe('LinkButton', () => {
  it('displays an arrow icon on hover', async () => {
    const { findByTestId } = render(
      <LinkButton testId="Test__LinkButton" href="/">
        Hello, World!
      </LinkButton>
    );

    const icon = await findByTestId('Test__LinkButton__Icon');

    expect(icon).toHaveStyle('opacity: 0.75');

    fireEvent.mouseOver(icon);

    await waitFor(() => expect(icon).toHaveStyle('opacity: 1'), {
      timeout: 2000,
    });

    fireEvent.mouseLeave(icon);

    await waitFor(() => expect(icon).toHaveStyle('opacity: 0.75'), {
      timeout: 2000,
    });
  });
});
