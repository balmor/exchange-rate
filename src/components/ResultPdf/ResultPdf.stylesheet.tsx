import {
  Font,
  StyleSheet,
} from '@react-pdf/renderer';

import Arial from './../../../public/fonts/Arial.ttf';
import ArialBold from './../../../public/fonts/ArialBold.ttf';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: Arial,
    },
    {
      src: ArialBold,
      fontWeight: 'bold',
    },
  ],
});

// Create styles
export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Arial',
    flexDirection: 'column',
    fontSize: 14,
  },
  section: {
    margin: 70,
    padding: 10,
    flexGrow: 1,
  },
  invoice: {
    marginBottom: 30,
  },
  header1: {
    fontWeight: 700,
    margin: '0 0 10px',
    textTransform: 'uppercase',
  },
  header2: {
    margin: '10px 0',
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  diffWraper: {
    flexDirection: 'row',
    fontWeight: 700,
  },
  diff1: {
    flexDirection: 'column',
    width: '42%',
    textAlign: 'right',
  },
  diff2: {
    flexDirection: 'column',
    width: '25%',
    textAlign: 'center',
  },
  diff3: {
    flexDirection: 'column',
    width: '33%',
  },
});