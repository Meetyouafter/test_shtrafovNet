import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray, useFormikContext } from 'formik';
import Button from '@mui/material/Button';
import { TextField, Typography, Switch } from '@mui/material';

const BankAccounts = () => {
  const { values, errors, handleChange } = useFormikContext();
  return (
    <div>
          <Form>
            <FieldArray name='account_emails'>
              {({ insert, remove, push }) => (
                <div>
                  {values.bank_accounts.length > 0 &&
                    values.bank_accounts.map((account, index) => (
                      <div key={index}>
          <Typography>* Название счета</Typography>
          <TextField
            id='name'
            name='name'
            value={account.name}
            onChange={handleChange}
            error={!!errors.bank_accounts}
            helperText={errors.bank_accounts}
          />
          <Typography>* Номер счета</Typography>
          <TextField
            id='bank_accounts_number'
            name='bank_accounts_number'
            value={values.bank_accounts_number}
            onChange={handleChange}
            error={!!errors.bank_accounts_number}
            helperText={errors.bank_accounts_number}
          />
          <Typography>* БИК счета</Typography>
          <TextField
            id='bank_accounts_bik'
            name='bank_accounts_bik'
            value={values.bank_accounts_bik}
            onChange={handleChange}
            error={!!errors.bank_accounts_bik}
            helperText={errors.bank_accounts_bik}
          />
          <Typography>* Корр. номер счета</Typography>
          <TextField
            id='bank_accounts_corr_number'
            name='bank_accounts_corr_number'
            value={values.bank_accounts_corr_number}
            onChange={handleChange}
            error={!!errors.bank_accounts_corr_number}
            helperText={errors.bank_accounts_corr_number}
          />
          <Typography>Дефолтный счет</Typography>
          <Switch
            name='bank_accounts_is_default'
            value={values.bank_accounts_is_default}
            onChange={handleChange}
            disabled
            defaultChecked
          />
                      </div>
                    ))}
          <Button fullWidth onClick={() => push('')}>+ Добавить еще счет</Button>
                </div>
              )}
            </FieldArray>
            <button type='submit'>Invite</button>
          </Form>
    </div>
  );
};

export default BankAccounts;
