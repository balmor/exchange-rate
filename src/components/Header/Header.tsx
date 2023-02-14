import React from 'react';
import { useTheme } from 'styled-components';
import { StyledContainer } from '../StyledContainer';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, lighten, Tooltip } from '@mui/material';
import { githubRepoLink } from '../../utils';
import { StyledHeader, StyledTitle } from '.';

export const Header: React.FC = (): JSX.Element => {
  const themeContext = useTheme();

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledTitle>Kalkulator różnic kursowych</StyledTitle>
      </StyledContainer>
      <Tooltip title="GitHub repository">
        <IconButton
          LinkComponent="a"
          href={githubRepoLink}
          aria-label="GitHub repository"
          sx={{
            marginRight: 5,
          }}
        >
          <GitHubIcon
            sx={{
              color: themeContext.primary,
              ':hover': {
                color: lighten(themeContext.primary, 0.2),
              },
            }}
          />
        </IconButton>
      </Tooltip>
    </StyledHeader>
  );
};
