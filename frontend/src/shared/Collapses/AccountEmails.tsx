import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray, useFormikContext } from 'formik';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const AccountEmails = () => {
  const { values, errors, handleChange } = useFormikContext();
  return (
    <div>
          <Form>
            <FieldArray name='account_emails'>
              {({ insert, remove, push }) => (
                <div>
                  {values.account_emails.length > 0 &&
                    values.account_emails.map((friend, index) => (
                      <div className='row' key={index}>
                        <div className='col'>
                        <TextField
                          name={`account_emails.${index}`}
                          value={values.account_emails}
                          onChange={handleChange}
                          error={!!errors.account_emails}
                          helperText={errors.account_emails}
                        />
                          <Button
                            variant='text'
                            color='error'
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
            <button type='submit'>Invite</button>
          </Form>
    </div>
  );
};

export default AccountEmails;
