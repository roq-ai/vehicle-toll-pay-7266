import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  payment_date: yup.date().nullable(),
  payment_method: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  toll_booth_id: yup.string().nullable().required(),
});
