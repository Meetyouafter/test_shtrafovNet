import React from 'react';
import {
  Container, Grid, Typography, FormControl, OutlinedInput, InputAdornment, InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomersTable from '../Table/Table';
import Modal from '../Modal/Modal';

const CustomersPage = () => (
  <Container>
    <Grid container>
      <Grid item container xs={6} sx={{ height: '50px', alignItems: 'center' }}>
        <Typography sx={{ width: '100px', display: 'inline-block' }}>Клиенты</Typography>
      </Grid>
      <Grid item container xs={6} sx={{ height: '50px', alignItems: 'center', justifyContent: 'flex-end' }}>
        <FormControl size="small" sx={{ width: '150px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            type="text"
            endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
            label="Поиск"
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
