import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { darkMuiTheme } from './config/muiTheme';
import Typography from '@mui/material/Typography';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FormProvider from './context/FormProvider';

const queryClient = new QueryClient();

const App: React.FC = (): JSX.Element => (
  <ThemeProvider theme={darkMuiTheme}>
    <QueryClientProvider client={queryClient}>
      <Typography component={'div'}>
        <FormProvider>
          <Header />
          <Section />
        </FormProvider>
      </Typography>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
