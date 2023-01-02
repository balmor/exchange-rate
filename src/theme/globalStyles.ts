import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { darken, lighten } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // GENERAL
  ::selection {
    color: ${({ theme }) => lighten(theme.secondary, 0.3)};
    background: #555;
  }

  ::-webkit-scrollbar {
    width: 0.7rem;
    height: 0.5rem;
    background: transparent
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => darken(theme.secondary, 0.2)};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => darken(theme.secondary, 0.4)};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    opacity: 1;
    background-image:  linear-gradient(135deg, ${({ theme }) =>
      theme.primaryDarken} 25%, transparent 25%), linear-gradient(225deg, ${({
  theme,
}) => theme.primaryDarken} 25%, transparent 25%), linear-gradient(45deg, ${({
  theme,
}) => theme.primaryDarken} 25%, transparent 25%), linear-gradient(315deg, ${({
  theme,
}) => theme.primaryDarken} 25%, ${({ theme }) => theme.primary} 25%);
    background-position:  3px 0, 3px 0, 0 0, 0 0;
    background-size: 3px 3px;
    background-repeat: repeat;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.textPrimary};
    scroll-behavior: smooth;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.8rem;


    scrollbar-base-color: white;
    scrollbar-shadow-color: none;
    scrollbar-track-color: white
  }
`;
