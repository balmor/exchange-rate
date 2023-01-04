import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import { ResultProps } from '../Result';
import { Table } from '../TablePdf';
import Arial from './../../..//public/fonts/Arial.ttf';
import ArialBold from './../../..//public/fonts/ArialBold.ttf';

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
const styles = StyleSheet.create({
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

export type ResultPropsPdf = ResultProps & {
  invoiceNumber: string;
};

const currenyExchange = 'PLN';

export const ResultPdf: React.FC<ResultPropsPdf> = ({
  firstResult: { currency, ...firstResult } = {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  secondResult: { currency: secondCurrency, ...secondResult } = {},
  diffResult,
  invoiceNumber,
}) => {
  const tableHeader = {
    amount: `wartość netto ${currency}`,
    course: `kurs ${currency}/${currenyExchange}`,
    result: `wartość netto ${currenyExchange}`,
    date: 'kurs z dnia',
  };

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header1}>Różnice kursowe</Text>
          <Text style={styles.invoice}>dla faktury nr {invoiceNumber}</Text>
          <Text style={styles.header2}>Wartość w ewidencji przychodów</Text>
          <Table data={[firstResult]} dataHeader={tableHeader} />
          <Text style={styles.header2}>Faktyczny wpływ</Text>
          <Table data={[secondResult]} dataHeader={tableHeader} />
          <View style={styles.diffWraper}>
            <Text style={styles.diff1}>RÓŻNICA</Text>
            <Text style={styles.diff2}>{diffResult}</Text>
            <Text style={styles.diff3}>Przychód podatkowy</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
