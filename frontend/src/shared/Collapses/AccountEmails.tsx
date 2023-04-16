import React from 'react';
import {
  Form, FieldArray, FormikContextType, useFormikContext,
} from 'formik';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { IFormValues } from './formData';

const AccountEmails = () => {
  const { values, errors, handleChange }: FormikContextType<IFormValues> = useFormikContext();

  return (
    <div>
      <Form>
        <FieldArray name="account_emails">
          {({ remove, push }) => (
            <div>
              {values.account_emails.length > 0
                    && values.account_emails.map((el, index) => (
                      <div className="row" key={el}>
                        <div className="col">
                          <TextField
                            name={`account_emails.${index}`}
                            value={values.account_emails}
                            onChange={handleChange}
                            error={!!errors.account_emails}
                            helperText={errors.account_emails}
                          />
                          <Button
                            variant="text"
                            color="error"
                            onClick={() => remove(index)}
                          >
                            - Удалить
                          </Button>
                        </div>
                      </div>
                    ))}
              <Button fullWidth onClick={() => push('')}>
                + Добавить еще Email
              </Button>
            </div>
          )}
        </FieldArray>
        <button type="submit">Invite</button>
      </Form>
    </div>
  );
};

export default AccountEmails;
