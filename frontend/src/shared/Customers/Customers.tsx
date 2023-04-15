import React from "react";
import { Container, Grid, Typography, Button, FormControl, OutlinedInput, InputAdornment, FormHelperText,
  InputLabel, } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import styles from './customers.module.css';
import CustomersTable from "../Table/Table";
import Modal from "../Modal/Modal";

const Customers = () => (
  <Container className={styles.wrapper}>
    <Grid container>
      <Grid item xs={12}>
        <Typography className={styles.title}>Клиенты</Typography>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
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
)

export default Customers;