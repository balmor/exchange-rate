import React from 'react';
import { StyledErrorMessage } from '.';

type ErrorMessageProps = {
  message: string | undefined;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
}): JSX.Element => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};
