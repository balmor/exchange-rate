import styled from 'styled-components';

export const StyledHeader = styled('header')`
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

export const StyledTitle = styled('h1')`
  color: ${({ theme }) => theme.textSecondary};
`;
