import React from 'react';
import {
  Container, Grid, Typography, FormControl, OutlinedInput, InputAdornment, InputLabel,
} from '@mui/material';
import CustomersTable from '../Table/Table';
import Modal from '../Modal/Modal';
import styles from './customers.module.css';

const CustomersPage = () => (
  <Container className={styles.wrapper}>
    <Grid container>
      <Grid item xs={12}>
        <Typography className={styles.title}>Клиенты</Typography>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            label="Password"
          />
        </FormControl>
        <Modal />
      </Grid>
      <Grid item>
        <CustomersTable />
      </Grid>
    </Grid>
  </Container>
);

export default CustomersPage;
