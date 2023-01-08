import * as React from 'react';
import { Controller, Control } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

type DateCalcPickerProps = {
  control: Control;
  name: string;
  label: string;
  smallScreen: boolean;
};

export const DateCalcPicker: React.FC<DateCalcPickerProps> = ({
  control,
  name,
  label,
  smallScreen,
}): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({
        field: { onChange, value = null },
        fieldState: { error } = {},
      }) => (
        <DatePicker
          label={label}
          onChange={onChange}
          value={value}
          disableFuture
          renderInput={params => (
            <TextField
              sx={{ width: smallScreen ? 250 : 270 }}
              {...params}
              error={!!error}
            />
          )}
        />
      )}
    />
  );
};
