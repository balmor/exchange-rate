import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled('div')`
  color: ${({ theme }) => theme.secondaryDarken};
  padding: 0.5rem 0;
  font-size: 1.4rem;
`;

type ErrorMessageProps = {
  message: string | undefined;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
}): JSX.Element => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};
