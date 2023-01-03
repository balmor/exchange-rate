import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { darkMuiTheme } from './config/muiTheme';
import Typography from '@mui/material/Typography';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NBPProvider from './context/NBPProvider';

const queryClient = new QueryClient();

const App: React.FC = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={darkMuiTheme}>
      <Typography component={'div'}>
        <NBPProvider>
          <Header />
          <Section />
        </NBPProvider>
      </Typography>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
