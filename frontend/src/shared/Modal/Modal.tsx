import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as Yup from 'yup';
import { useFormik, useFormikContext } from 'formik';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Collapses from '../Collapses/Collapses';
import styles from './modal.module.css';

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Добавить клиента
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <DialogTitle id="customized-dialog-title" className={styles.header}>
          Создание цены
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        
        <DialogContent dividers>
          <Collapses />
        </DialogContent>
        
        <DialogActions className={styles.footer}>
          <Button variant="contained" type="button" onClick={() => console.log(3)}>
            Создать
          </Button>
        </DialogActions>
      
      </Dialog>
    </div>
  );
}