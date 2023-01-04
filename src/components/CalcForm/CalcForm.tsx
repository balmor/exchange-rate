import React, { useContext } from 'react';
import plLocale from 'date-fns/locale/pl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CurrencyCode from './../../config/currencyCode.json';
import { useTheme } from 'styled-components';

import {
  darken,
  FormGroup,
  FormControl,
  Box,
  Button,
  TextField,
  Autocomplete,
} from '@mui/material';

import LoadingButton from '@mui/lab/LoadingButton';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { DateCalcPicker } from '../DateCalcPicker';
import { ErrorMessage } from '../ErrorMessage';
import { formatData } from '../../utils';
import { useNBPGet } from '../../hooks/useNBPGet';
import { FormContext } from '../../context/FormProvider';

export type IFormInput = {
  required?: string;
  amount?: string;
  currency?: string;
  dateStart?: string | null;
  dateEnd?: string | null;
};

const errorMessages: IFormInput = {
  required: 'To pole jest wymagane',
  currency: 'Wybierz walute',
};

export const CalcForm: React.FC = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    reValidateMode: 'onSubmit',
    defaultValues: {
      amount: '',
      currency: 'EUR',
      dateStart: null,
      dateEnd: null,
    },
  });
  const themeContext = useTheme();
  const { formData, setFormData } = useContext(FormContext);

  const [
    { isInitialLoading: isLoadingStart },
    { isInitialLoading = isLoadingStart },
  ] = useNBPGet(formData);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const formattedData = formatData(data);
    setFormData(formattedData);
  };

  const handleReset = () => {
    reset();
    setFormData({});
  };

  return (
    <Box
      sx={{
        padding: 10,
        marginTop: 10,
        backgroundColor: darken(themeContext.primary, 0.2),
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGroup row sx={{ marginBottom: 10 }}>
          <FormControl sx={{ height: 60 }}>
            <Controller
              name='amount'
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState: { error } = {} }) => {
                return (
                  <TextField
                    required
                    sx={{ width: 270 }}
                    {...field}
                    error={!!error}
                    label='Kwota należnośc'
                  />
                );
              }}
            />
            {errors.amount?.type === 'required' && (
              <ErrorMessage message={errorMessages.required} />
            )}
          </FormControl>
          <FormControl sx={{ height: 60 }}>
            <Controller
              name='currency'
              control={control}
              rules={{ required: true }}
              render={({
                field,
                field: { onChange, value },
                fieldState: { error } = {},
              }) => {
                return (
                  <Autocomplete
                    // value={[value]}
                    disablePortal
                    options={CurrencyCode}
                    sx={{ width: 120 }}
                    onChange={(_, data) => onChange(data)}
                    renderInput={params => (
                      <TextField
                        {...params}
                        error={!!error}
                        required
                        label='Waluta'
                      />
                    )}
                  />
                );
              }}
            />
            {errors.currency?.type === 'required' && (
              <ErrorMessage message={errorMessages.currency} />
            )}
          </FormControl>
        </FormGroup>
        <FormGroup row sx={{ marginBottom: 10 }}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={plLocale}
          >
            <FormControl sx={{ height: 60 }}>
              <DateCalcPicker
                control={control}
                name='dateStart'
                label='Data przychodu należnego'
              />
              {errors.dateStart?.type === 'required' && (
                <ErrorMessage message={errorMessages.required} />
              )}
            </FormControl>
            <FormControl sx={{ height: 60 }}>
              <DateCalcPicker
                control={control}
                name='dateEnd'
                label='Data otrzymania wpłaty'
              />
              {errors.dateEnd?.type === 'required' && (
                <ErrorMessage message={errorMessages.required} />
              )}
            </FormControl>
          </LocalizationProvider>
        </FormGroup>
        <FormGroup row sx={{ justifyContent: 'space-between' }}>
          <Button type='button' onClick={handleReset}>
            Wyczyść
          </Button>
          <LoadingButton
            sx={{ width: 100, marginLeft: 12 }}
            variant='contained'
            type='submit'
            loading={isInitialLoading}
            disabled={isInitialLoading}
          >
            Oblicz
          </LoadingButton>
        </FormGroup>
      </form>
    </Box>
  );
};
