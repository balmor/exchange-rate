/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from 'styled-components';
import { StyledTheme } from './_types';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
