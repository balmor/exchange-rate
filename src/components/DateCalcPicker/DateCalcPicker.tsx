import * as React from 'react';
import { Controller, Control } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { IFormInput } from '../CalcForm';

type DateCalcPickerProps = {
  control: Control<IFormInput>;
  name: any; // to add proper type
  label: string;
};

export const DateCalcPicker: React.FC<DateCalcPickerProps> = ({
  control,
  name,
  label,
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
            <TextField sx={{ width: 270 }} {...params} error={!!error} />
          )}
        />
      )}
    />
  );
};
