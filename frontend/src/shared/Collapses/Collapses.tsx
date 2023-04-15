import React, { useState } from 'react';
import * as Yup from 'yup';
import {
  useFormik,
  FieldArray,
  Formik,
  FormikHelpers,
  FormikValues,
} from 'formik';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from '@mui/material/TextField';
import styles from './styles.module.css';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Switch } from '@mui/material';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccountEmails from './AccountEmails';
import ClientData from './ClientData';
import { formSchema, formValues } from './formData';
import OrganizationData from './OrganizationData';
import BankAccounts from './BankAccounts';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const Collapses = () => {
  const [expanded1, setExpanded1] = useState<boolean>(true);
  const [expanded2, setExpanded2] = useState<boolean>(true);
  const [expanded3, setExpanded3] = useState<boolean>(true);
  const [expanded4, setExpanded4] = useState<boolean>(true);
  const [bankAccountCount, setBankAccountCount] = useState<number>(1);
  const [newEmail, setNewEmail] = useState<string>('');
  newEmail;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      if (panel === 'panel1') {
        setExpanded1(!expanded1);
      }
      if (panel === 'panel2') {
        setExpanded2(!expanded2);
      }
      if (panel === 'panel3') {
        setExpanded3(!expanded3);
      }
      if (panel === 'panel4') {
        setExpanded3(!expanded4);
      }
    };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        validateField,
        validateForm,
        handleChange,
      }) => (
        <div>
          <Accordion expanded={expanded1} onChange={handleChange('panel1')}>
            <AccordionSummary
              aria-controls='panel1d-content'
              id='panel1d-header'
            >
              <Typography>Детали клиента</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ClientData />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded2} onChange={handleChange('panel2')}>
            <AccordionSummary
              aria-controls='panel2d-content'
              id='panel2d-header'
            >
              <Typography>Детали организации</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <OrganizationData />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded3} onChange={handleChange('panel3')}>
            <AccordionSummary
              aria-controls='panel3d-content'
              id='panel3d-header'
            >
              <Typography>Банковские счета</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <BankAccounts />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded4} onChange={handleChange('panel4')}>
            <AccordionSummary
              aria-controls='panel4d-content'
              id='panel4d-header'
            >
              <Typography>Emails для счетов</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>* Email</Typography>
              <AccountEmails />
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </Formik>
  );
};

export default Collapses;
