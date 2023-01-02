import React from 'react';
import styled from 'styled-components';
import { StyledContainer } from '../StyledContainer';

const StyledHeader = styled('header')`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.secondary};
  height: 8rem;
`;

const StyledTitle = styled('h1')`
  color: ${({ theme }) => theme.textSecondary};
`;

export const Header: React.FC = (): JSX.Element => (
  <StyledHeader>
    <StyledContainer>
      <StyledTitle>Kalkulator różnic kursowych</StyledTitle>
    </StyledContainer>
  </StyledHeader>
);
