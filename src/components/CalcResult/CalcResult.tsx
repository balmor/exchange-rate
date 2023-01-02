import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { darken } from '@mui/material/styles';
import { PDFDownloadLink } from '@react-pdf/renderer';
import format from 'date-fns/format';
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { NBPContext } from '../../context/NBPProvider';
import { priceFormat } from '../../utils';
import { Notification } from '../Notification';
import { Result } from '../Result';
import { ResultPdf } from '../ResultPdf';

const StyledPDFDownloadLink = styled(PDFDownloadLink)`
  text-decoration: none;
  margin: 0 auto;
  width: 190px;
  display: block;
`;

export type ICalcResultProps = {
  amount: string;
  course: string;
  result: string;
  date: string;
  currency: string;
};

export const CalcResult: React.FC = (): JSX.Element => {
  const themeContext = useTheme();

  const { course } = useContext(NBPContext);
  const [
    {
      startData = null,
      isErrorStart = false,
      formattedData: { amount = '' } = {},
    } = {},
    { endData = null, isErrorEnd = false } = {},
  ] = course;

  if ((!startData || !endData) && !isErrorStart && !isErrorEnd) {
    return <></>;
  }

  const renderError = () => {
    if (isErrorStart || isErrorEnd) {
      return <Notification />;
    }
  };

  const renderResult = () => {
    if (startData || endData) {
      const { code, currency, rates: [firstRate] = [] } = startData;
      const { rates: [secondRate] = [] } = endData;
      const { mid: startMid, effectiveDate: startDate } = firstRate;
      const { mid: endMid, effectiveDate: endDate } = secondRate;
      const stratResult = (amount * startMid * 100) / 100;
      const displayStart = priceFormat(stratResult, 2);
      const endResult = (amount * endMid * 100) / 100;
      const displayEnd = priceFormat(endResult, 2);
      const diffResult = endResult - stratResult;
      const totalResult = priceFormat(diffResult, 2);

      const pdfFileName = `roznice-${format(new Date(endDate), 'MM_yyyy')}`;
      const invoiceNumber = `1/${format(new Date(endDate), 'MM/yyyy')}`;

      // move formatted data to the NBPContext
      const formattedStart: ICalcResultProps = {
        amount,
        course: priceFormat(startMid, 4),
        result: displayStart,
        date: format(new Date(startDate), 'dd.MM.yyyy'),
        currency: code,
      };

      const formattedEnd: ICalcResultProps = {
        amount,
        course: priceFormat(endMid, 4),
        result: displayEnd,
        date: format(new Date(endDate), 'dd.MM.yyyy'),
        currency: code,
      };

      return (
        <>
          <Result
            formattedStart={formattedStart}
            formattedEnd={formattedEnd}
            diffResult={totalResult}
            currency={currency}
          />
          <StyledPDFDownloadLink
            document={
              <ResultPdf
                formattedStart={formattedStart}
                formattedEnd={formattedEnd}
                diffResult={totalResult}
                currency={currency}
                invoiceNumber={invoiceNumber}
              />
            }
            fileName={`${pdfFileName}.pdf`}
          >
            <Button
              variant='outlined'
              color='secondary'
              size='small'
              endIcon={<FileDownloadIcon />}
            >
              Pobierz dokument
            </Button>
          </StyledPDFDownloadLink>
        </>
      );
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        color: themeContext.textPrimary,
        padding: 10,
        marginBottom: 10,
        backgroundColor: darken(themeContext.primary, 0.4),
      }}
    >
      {renderError()}
      {renderResult()}
    </Box>
  );
};
