import { View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import { TableRow } from './';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: 380,
  },
});

export type ITableData = {
  [key: string]: string;
};

type ITableForm = {
  data: ITableData[];
  dataHeader: ITableData[];
};

export const Table: React.FC<ITableForm> = ({ data, dataHeader }) => (
  <View style={styles.tableContainer}>
    <TableRow data={dataHeader} rowOff />
    <TableRow data={data} />
  </View>
);
