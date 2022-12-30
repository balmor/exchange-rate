import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../../theme/dark';
import { GlobalStyle } from '../../theme/globalStyles';

type ThemeProps = { children: React.ReactNode };

export const Theme: React.FC<ThemeProps> = ({ children }): JSX.Element => (
  <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
