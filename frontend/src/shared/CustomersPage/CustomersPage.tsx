import React, { useState, useEffect } from 'react';
import {
  Container, Grid, Typography, FormControl, OutlinedInput, InputAdornment, InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomersTable from '../Table/Table';
import Modal from '../Modal/Modal';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('api/customers')
      .then(res => res.json())
      .then(json => setCustomers(json.customers));
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item container xs={6} sx={{ height: '50px', alignItems: 'center' }}>
          <Typography sx={{ width: '100px', display: 'inline-block' }}>Клиенты</Typography>
        </Grid>
        <Grid item container xs={6} sx={{ height: '50px', alignItems: 'center', justifyContent: 'flex-end' }}>
          <FormControl size="small" sx={{ width: '150px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-search">Поиск</InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              type="text"
              endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
              label="Поиск"
            />
          </FormControl>
          <Modal customers={customers} setCustomers={setCustomers} />
        </Grid>
        <Grid item>
          <CustomersTable customers={customers} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomersPage;
