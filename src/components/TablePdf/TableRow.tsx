import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ITableData } from '.';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    border: '1px solid black',
    textAlign: 'right',
    margin: '0',
  },
  tableCell: {
    flexDirection: 'column',
    width: '27%',
    borderRight: '1px solid black',
    padding: '2pt 5pt',
    margin: '0',
  },
});

type IRowOff = {
  rowOff?: boolean;
};

type ITableRowForm = IRowOff & {
  data: ITableData[];
};

type ITableCellForm = IRowOff & {
  item: ITableData;
  cells: string[];
};

export const TableRow: React.FC<ITableRowForm> = ({ data, rowOff = false }) => {
  const TableCells: React.FC<ITableCellForm> = ({ item, cells, rowOff }) => {
    return (
      <>
        {cells.map((cell, index) => {
          return (
            <Text
              style={[
                styles.tableCell,
                index === 1 && { width: '22%' },
                index === 2 && !rowOff ? { fontWeight: 700 } : {},
                index === 3 && { borderRight: 'none', width: '24%' },
              ]}
              key={index}
            >
              {item[cell]}
            </Text>
          );
        })}
      </>
    );
  };

  const rows = data.map((item, index) => {
    const cells = Object.keys(item);
    return (
      <View
        style={[
          styles.row,
          rowOff && {
            borderBottom: 'none',
            textAlign: 'left',
            alignItems: 'flex-end',
          },
        ]}
        key={index}
      >
        <TableCells item={item} cells={cells} rowOff={rowOff} />
      </View>
    );
  });
  return <Fragment>{rows}</Fragment>;
};
