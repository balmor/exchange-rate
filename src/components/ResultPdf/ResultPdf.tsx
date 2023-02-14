import { Document, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '.';
import { ResultProps } from '../Result';
import { Table } from '../TablePdf';

type ResultPropsPdf = ResultProps & {
  invoiceNumber: string;
};

const currenyExchange = 'PLN';

export const ResultPdf: React.FC<ResultPropsPdf> = ({
  firstResult: { currency, ...firstResult },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  secondResult: { currency: secondCurrency, ...secondResult },
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
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header1}>Różnice kursowe</Text>
          <Text style={styles.invoice}>dla faktury nr {invoiceNumber}</Text>
          <Text style={styles.header2}>Wartość w ewidencji przychodów</Text>
          <Table data={[firstResult]} dataHeader={[tableHeader]} />
          <Text style={styles.header2}>Faktyczny wpływ</Text>
          <Table data={[secondResult]} dataHeader={[tableHeader]} />
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
