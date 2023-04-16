import React from 'react';
import {
  Form, FieldArray, FormikContextType, useFormikContext,
} from 'formik';
import Button from '@mui/material/Button';
import { TextField, Typography, Switch } from '@mui/material';
import { IFormValues } from './formData';

const BankAccounts = () => {
  const { values, errors, handleChange }: FormikContextType<IFormValues> = useFormikContext();

  return (
    <div>
      <Form>
        <FieldArray name="account_emails">
          {({ push }) => (
            <div>
              {values.bank_accounts.length > 0
                    && values.bank_accounts.map((account, index) => (
                      <div key={account.name}>
                        <Typography>* Название счета</Typography>
                        <TextField
                          id="name"
                          name="name"
                          value={account.name}
                          onChange={handleChange}
                          error={!!errors.bank_accounts}
                          helperText={errors.bank_accounts}
                        />
                        <Typography>* Номер счета</Typography>
                        <TextField
                          id="number"
                          name="number"
                          value={account.number}
                          onChange={handleChange}
                          error={!!errors.number}
                          helperText={errors.number}
                        />
                        <Typography>* БИК счета</Typography>
                        <TextField
                          id="bik"
                          name="bik"
                          value={account.bik}
                          onChange={handleChange}
                          error={!!errors.bik}
                          helperText={errors.bik}
                        />
                        <Typography>* Корр. номер счета</Typography>
                        <TextField
                          id="corr_number"
                          name="corr_number"
                          value={account.corr_number}
                          onChange={handleChange}
                          error={!!errors.corr_number}
                          helperText={errors.corr_number}
                        />
                        <Typography>Дефолтный счет</Typography>
                        <Switch
                          name="is_default"
                          value={account.is_default}
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
        <button type="submit">Invite</button>
      </Form>
    </div>
  );
};

export default BankAccounts;
