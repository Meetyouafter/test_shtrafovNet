import React from 'react';
import {
  Form, FormikContextType, useFormikContext,
} from 'formik';
import { TextField, Typography } from '@mui/material';
import { IFormValues } from './formData';

const OrganizationData = () => {
  const { values, errors, handleChange }: FormikContextType<IFormValues> = useFormikContext();

  return (
    <Form>
      <Typography>* Название организации</Typography>
      <TextField
        id="org_name"
        name="org_name"
        value={values.org_name}
        onChange={handleChange}
        error={!!errors.org_name}
        helperText={errors.org_name}
      />
      <Typography>* ИНН организации</Typography>
      <TextField
        id="org_inn"
        name="org_inn"
        value={values.org_inn}
        onChange={handleChange}
        error={!!errors.org_inn}
        helperText={errors.org_inn}
      />
      <Typography>* КПП организации</Typography>
      <TextField
        id="org_kpp"
        name="org_kpp"
        value={values.org_kpp}
        onChange={handleChange}
        error={!!errors.org_kpp}
        helperText={errors.org_kpp}
      />
      <Typography>* ОГРН организации</Typography>
      <TextField
        id="org_ogrn"
        name="org_ogrn"
        value={values.org_ogrn}
        onChange={handleChange}
        error={!!errors.org_ogrn}
        helperText={errors.org_ogrn}
      />
      <Typography>* Юридический адрес</Typography>
      <TextField
        id="org_adress"
        name="org_adress"
        value={values.org_adress}
        onChange={handleChange}
        error={!!errors.org_adress}
        helperText={errors.org_adress}
      />
    </Form>
  );
};

export default OrganizationData;
