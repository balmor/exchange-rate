import styled from 'styled-components';
import { darken } from '@mui/material/styles';

export const HeadResult = styled('h3')`
  text-align: center;
  text-transform: uppercase;
  padding: 3rem 0 0;
`;

export const CourseResult = styled('h2')`
  margin: 5rem 0;
  padding: 1rem 0;
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  border-top: 1px solid ${({ theme }) => darken(theme.secondary, 0.7)};
  border-bottom: 1px solid ${({ theme }) => darken(theme.secondary, 0.7)};
`;
