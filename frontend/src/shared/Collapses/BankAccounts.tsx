import React from 'react';
import {
  FieldArray, FormikContextType, useFormikContext,
} from 'formik';
import { TextField, Typography, Button, Divider } from '@mui/material';
import { IFormValues } from './formData';

const AccountEmails = () => {
  const {
    values, errors, setFieldValue,
  }:
    FormikContextType<IFormValues> = useFormikContext();

  const handleAccountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: string,
  ) => {
    const { name, value, checked } = e.target;
    const val = key === 'is_default' ? checked : value;
    setFieldValue(`bank_accounts[${index}].${key}`, e.target.value);
  };

  return (
    <div>
      <FieldArray name="bank_accounts">
        {({ remove, push }) => (
          <div>
            {values.bank_accounts.length > 0
                  && values.bank_accounts.map((account, index) => (
                    <div className="row" key={account.bik}>
                      {index && <Divider />}
                      <Typography>* Название счета</Typography>
                      <TextField
                        name={`bank_accounts.${index}.name`}
                        value={account.name}
                        error={errors.bank_accounts?.[index]?.name}
                        helperText={errors.bank_accounts?.[index]?.name}
                        onChange={e => handleAccountChange(e, index, 'name')}
                      />
                      <Typography>* Номер счета</Typography>
                      <TextField
                        id="number"
                        name={`bank_accounts.${index}.number`}
                        value={account.number}
                        error={errors.bank_accounts?.[index]?.number}
                        helperText={errors.bank_accounts?.[index]?.number}
                        onChange={e => handleAccountChange(e, index, 'number')}
                      />
                      <Typography>* БИК счета</Typography>
                      <TextField
                        id="bik"
                        name={`bank_accounts.${index}.bik`}
                        value={account.bik}
                        error={errors.bank_accounts?.[index]?.bik}
                        helperText={errors.bank_accounts?.[index]?.bik}
                        onChange={e => handleAccountChange(e, index, 'bik')}
                      />
                      <Typography>* Корр. номер счета</Typography>
                      <TextField
                        id="corr_number"
                        name={`bank_accounts.${index}.corr_number`}
                        value={account.corr_number}
                        error={errors.bank_accounts?.[index]?.corr_number}
                        helperText={errors.bank_accounts?.[index]?.corr_number}
                        onChange={e => handleAccountChange(e, index, 'corr_number')}
                      />
                      {index && (
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => remove(index)}
                        >
                          - Удалить счет
                        </Button>
                      )}
                    </div>
                  ))}
            <Button
              fullWidth
              onClick={() => push({
                name: '',
                number: '',
                bik: '',
                corr_number: '',
                is_default: false,
              })}
            >
              + Добавить еще счет
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default AccountEmails;
