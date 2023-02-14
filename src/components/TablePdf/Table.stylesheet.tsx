import { StyleSheet } from '@react-pdf/renderer';

export const TableContainer = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: 380,
  },
});

export const TableStyle = StyleSheet.create({
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
