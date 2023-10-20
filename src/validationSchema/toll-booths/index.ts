import * as yup from 'yup';

export const tollBoothValidationSchema = yup.object().shape({
  location: yup.string().required(),
  status: yup.string().nullable(),
  toll_amount: yup.number().integer().nullable(),
  operational_hours: yup.string().nullable(),
  operator_id: yup.string().nullable().required(),
});
