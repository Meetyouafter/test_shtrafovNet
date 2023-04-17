import * as Yup from 'yup';

export interface IFormValues {
  name: string,
  email: string,
  deferral_days: string,
  credit_limit: string,
  org_name: string,
  org_inn: string,
  org_kpp: string,
  org_ogrn: string,
  org_adress: string,
  bank_accounts: [
    {
      name: string,
      number: string,
      bik: string,
      corr_number: string,
      is_default: boolean,
    },
  ],
  account_emails: [
    {
      email: string,
    },
  ],
}

const formValues: IFormValues = {
  name: '',
  email: '',
  deferral_days: '',
  credit_limit: '',
  org_name: '',
  org_inn: '',
  org_kpp: '',
  org_ogrn: '',
  org_adress: '',
  bank_accounts: [
    {
      name: '',
      number: '',
      bik: '',
      corr_number: '',
      is_default: false,
    },
  ],
  account_emails: [
    {
      email: '',
    },
  ],
};

const formSchema = Yup.object().shape({
  name: Yup.string().required('Введите Имя'),
  email: Yup.string().email('Введите корректный адрес').required('Введите Email'),
  deferral_days: Yup.number().required(
    'Дни отсрочки должны быть больше или равны нулю',
  ),
  credit_limit: Yup.number().required(
    'Кредитный лимит должен быть больше или равен нулю',
  ),
  org_name: Yup.string().required('Введите название организации'),
  org_inn: Yup.number().required('Введите ИНН организации'),
  org_kpp: Yup.number().required('Введите КПП организации'),
  org_ogrn: Yup.number().required('Введите ОГРН организации'),
  org_adress: Yup.string().required('Введите Юридический адрес'),
  bank_accounts: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Введите название счета'),
      number: Yup.number().required('Введите номер счета'),
      bik: Yup.number().required('Введите БИК счета'),
      corr_number: Yup.number().required(
        'Введите Корр. номер счета',
      ),
      is_default: Yup.boolean(),
    }),
  ),
  account_emails: Yup.array().of(
    Yup.object().shape({
      email: Yup.string().email('Введите корректный адрес').required('Введите Email'),
    }),
  ),
});

export { formValues, formSchema };
