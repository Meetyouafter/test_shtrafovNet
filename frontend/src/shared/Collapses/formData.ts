import * as Yup from 'yup';

const formValues= {
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
    }
  ],
  account_emails: [],
};

const formSchema = Yup.object().shape({
  name: Yup.string().required('Введите Имя'),
  email: Yup.string().email().required('Введите Email'),
  deferral_days: Yup.number().required(
    'Дни отсрочки должны быть больше или равны нулю'
  ),
  credit_limit: Yup.number().required(
    'Кредитный лимит должен быть больше или равен нулю'
  ),
  org_name: Yup.string().required('Введите название организации'),
  org_inn: Yup.number().required('Введите ИНН организации'),
  org_kpp: Yup.number().required('Введите КПП организации'),
  org_ogrn: Yup.number().required('Введите ОГРН организации'),
  org_adress: Yup.string().required('Введите Юридический адрес'),
  bank_accounts_name: Yup.string().required('Введите название счета'),
  bank_accounts_number: Yup.number().required('Введите номер счета'),
  bank_accounts_bik: Yup.number().required('Введите БИК счета'),
  bank_accounts_corr_number: Yup.number().required(
    'Введите Корр. номер счета'
  ),
  bank_accounts_is_default: Yup.boolean(),
  account_emails: Yup.array().of(
    Yup.string().email().required('Введите Email')
  ),
});

export { formValues, formSchema };
