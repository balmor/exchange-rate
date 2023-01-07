import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { darken } from '@mui/material/styles';
import { PDFDownloadLink } from '@react-pdf/renderer';
import format from 'date-fns/format';
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { displayFormattedResult, priceFormat } from '../../utils';
import { Notification } from '../Notification';
import { Result } from '../Result';
import { ResultPdf } from '../ResultPdf';
import { FormContext } from '../../context/FormProvider';
import { IExchangeTypes, useNBPGet } from '../../hooks/useNBPGet';

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

  const {
    formData,
    formData: { amount },
  } = useContext(FormContext);
  // const fetchParams = {

  // };

  const [
    { data: startData, isError: isErrorStart },
    { data: endData, isError: isErrorEnd },
  ] = useNBPGet(formData as IExchangeTypes);

  if ((!startData || !endData) && !isErrorStart && !isErrorEnd) {
    return <></>;
  }

  const renderError = () => {
    if (isErrorStart || isErrorEnd) {
      return <Notification />;
    }
  };

  const renderResult = () => {
    if (startData && endData) {
      const effectiveDate = startData.rates[0].effectiveDate;
      const { total: firstTotal, ...firstResult } = displayFormattedResult(
        startData,
        amount,
      );
      const { total: secondTotal, ...secondResult } = displayFormattedResult(
        endData,
        amount,
      );

      const totalResult = priceFormat(secondTotal - firstTotal, 2);

      const pdfFileName = `roznice-${format(
        new Date(effectiveDate),
        'MM_yyyy',
      )}`;
      const invoiceNumber = `1/${format(new Date(effectiveDate), 'MM/yyyy')}`;

      return (
        <>
          <Result
            firstResult={firstResult}
            secondResult={secondResult}
            diffResult={totalResult}
            currency={startData.currency}
          />
          <StyledPDFDownloadLink
            document={
              <ResultPdf
                firstResult={firstResult}
                secondResult={secondResult}
                diffResult={totalResult}
                currency={startData.currency}
                invoiceNumber={invoiceNumber}
              />
            }
            fileName={`${pdfFileName}.pdf`}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
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
