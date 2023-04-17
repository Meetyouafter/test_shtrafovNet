import React from 'react';
import {
  Form, useFormikContext, FormikContextType,
} from 'formik';
import { TextField, Typography } from '@mui/material';
import { IFormValues } from './formData';

const ClientData = () => {
  const { values, errors, handleChange }: FormikContextType<IFormValues> = useFormikContext();

  return (
    <div>
      <Typography>* Имя</Typography>
      <TextField
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />
      <Typography>* Email</Typography>
      <TextField
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <Typography>* Дней отсрочки</Typography>
      <TextField
        id="deferral_days"
        name="deferral_days"
        value={values.deferral_days}
        onChange={handleChange}
        error={!!errors.deferral_days}
        helperText={errors.deferral_days}
      />
      <Typography>* Кредитный лимит</Typography>
      <TextField
        id="credit_limit"
        name="credit_limit"
        value={values.credit_limit}
        onChange={handleChange}
        error={!!errors.credit_limit}
        helperText={errors.credit_limit}
      />
    </div>
  );
};

export default ClientData;
