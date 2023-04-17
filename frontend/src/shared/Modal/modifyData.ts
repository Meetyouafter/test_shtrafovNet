import { IFormValues } from "../Collapses/formData"

interface PostData {
  name: string,
  email: string,
  deferral_days: string,
  credit_limit: string,
  organization: {
    name: string,
    inn: string,
    kpp: string,
    ogrn: string,
    addr: string,
    bank_accounts: [
      {
        name: string,
        bik: string,
        account_number: string,
        corr_account_number: string,
        is_default: true
      }
    ]
  },
  metadata?: {
    additionalProp1?: string,
    additionalProp2?: string,
    additionalProp3?: string
  },
  invoice_emails?: [
    string
  ],
  invoice_prefix?: string
}

const modifyData = (values: IFormValues): PostData => {
  const data = {
    name: values.name,
    email: values.email,
    deferral_days: values.deferral_days,
    credit_limit: values.credit_limit,
    organization: {
      name: values.org_name,
      inn: values.org_inn,
      kpp: values.org_kpp,
      ogrn: values.org_ogrn,
      addr: values.org_adress,
      bank_accounts: values.bank_accounts,
    },
  };
  return data;
};

export default modifyData;
