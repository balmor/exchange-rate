import React from 'react';
import styled, { useTheme } from 'styled-components';
import { StyledContainer } from '../StyledContainer';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, lighten, Tooltip } from '@mui/material';
import { githubRepoLink } from '../../utils';

const StyledHeader = styled('header')`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.secondary};
  height: 8rem;

  @media (max-width: 45rem) {
    line-height: 3rem;
  }
`;

const StyledTitle = styled('h1')`
  color: ${({ theme }) => theme.textSecondary};
`;

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
