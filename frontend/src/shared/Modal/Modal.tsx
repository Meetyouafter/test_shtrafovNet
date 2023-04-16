import React, { useState } from 'react';
import { useFormikContext, FormikContextType, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapses from '../Collapses/Collapses';
import { IFormValues } from '../Collapses/formData';
import { formSchema, formValues } from '../Collapses/formData';


const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={formSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({
        handleSubmit,
        values,
      }) => (
    <div onSubmit={handleSubmit}>
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
          <Collapses />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-start' }}>
          <Button variant="contained" type="submit" onClick={() => console.log(values)}>
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      )}
      </Formik>
  );
};

export default Modal;
