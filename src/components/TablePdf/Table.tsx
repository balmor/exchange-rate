import { View } from '@react-pdf/renderer';
import React from 'react';
import { TableContainer, TableRow } from './';

export type ITableData = {
  [key: string]: string;
};

type ITableForm = {
  data: ITableData[];
  dataHeader: ITableData[];
};

export const Table: React.FC<ITableForm> = ({ data, dataHeader }) => (
  <View style={TableContainer.tableContainer}>
    <TableRow data={dataHeader} rowOff />
    <TableRow data={data} />
  </View>
);
