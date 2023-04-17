import React from 'react';
import {
  Form, FieldArray, FormikContextType, useFormikContext,
} from 'formik';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { IFormValues } from './formData';

const AccountEmails = () => {
  const {
    values, errors, setFieldValue,
  }:
    FormikContextType<IFormValues> = useFormikContext();

  const handleEmailChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(`account_emails[${index}].email`, event.target.value);
  };

  return (
    <div>
      <FieldArray name="account_emails">
        {({ remove, push }) => (
          <div>
            {values.account_emails.length > 0
                  && values.account_emails.map((account, index) => (
                    <div className="row" key={account.email}>
                      <TextField
                        name={`account_emails.${index}.email`}
                        value={account.email}
                        error={errors.account_emails?.[index]?.email}
                        helperText={errors.account_emails?.[index]?.email}
                        onChange={handleEmailChange(index)}
                        type="email"
                      />
                      {index && (
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => remove(index)}
                        >
                          - Удалить
                        </Button>
                      )}
                    </div>
                  ))}
            <Button fullWidth onClick={() => push({ email: '' })}>
              + Добавить еще Email
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default AccountEmails;
