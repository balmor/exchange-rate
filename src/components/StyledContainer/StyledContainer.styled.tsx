import styled, { css } from 'styled-components';

export const Container = css`
  width: 70rem;
  margin: 0 auto;

  @media (max-width: 45rem) {
    width: auto;
  }
`;

export const StyledContainer = styled.div`
  ${Container}
`;
