import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapses from '../Collapses/Collapses';
import { formSchema, formValues } from '../Collapses/formData';

const Modal = ({ customers, setCustomers }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sendData = (values, errors) => {
    fetch('api/customers', {
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCustomers([...customers, data]);
      })
      .catch(error => {
        throw new Error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={formSchema}
      onSubmit={values => console.log(values)}
    >
      {({
        values,
        errors,
      }) => (
        <>
          <Button variant="contained" onClick={handleClickOpen}>
            Добавить клиента
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" sx={{ width: '600px' }}>
              Создание цены
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Form>
                <Collapses />
              </Form>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-start' }}>
              <Button variant="contained" type="button" onClick={() => sendData(values, errors)}>
                Создать
              </Button>
            </DialogActions>
          </Dialog>

        </>
      )}
    </Formik>
  );
};

export default Modal;
