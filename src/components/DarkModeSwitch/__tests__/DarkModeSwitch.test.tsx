import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeContext } from 'src/providers/ThemeProvider';
import DarkModeSwitch from '../DarkModeSwitch';

const mockChangeTheme = jest.fn();

describe('DarkModeSwitch', () => {
  describe('when clicked', () => {
    it('makes a call to change the theme', async () => {
      const { findByTestId, rerender } = render(
        <ThemeContext.Provider
          value={{ theme: 'LIGHT', changeTheme: mockChangeTheme }}
        >
          <DarkModeSwitch />
        </ThemeContext.Provider>
      );

      const darkModeSwitch = await findByTestId('DarkModeSwitch');

      fireEvent.click(darkModeSwitch);

      expect(mockChangeTheme).toHaveBeenCalledTimes(1);
      expect(mockChangeTheme).toHaveBeenCalledWith('DARK');

      rerender(
        <ThemeContext.Provider
          value={{ theme: 'DARK', changeTheme: mockChangeTheme }}
        >
          <DarkModeSwitch />
        </ThemeContext.Provider>
      );

      fireEvent.click(darkModeSwitch);

      expect(mockChangeTheme).toHaveBeenCalledTimes(2);
      expect(mockChangeTheme).toHaveBeenCalledWith('LIGHT');
    });
  });
});
