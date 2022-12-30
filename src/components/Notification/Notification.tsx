import Box from '@mui/material/Box';
import { darken } from '@mui/material/styles';
import React from 'react';
import { useTheme } from 'styled-components';

export const Notification: React.FC = (): JSX.Element => {
  const themeContext = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        color: 'red',
        display: 'block',
        top: '0',
        left: '0',
        boxSizing: 'border-box',
        padding: '2rem',
        backgroundColor: darken(themeContext.primary, 0.4),
      }}
    >
      <div>Wystąpił błąd: brak wyniku</div>
    </Box>
  );
};
