import * as yup from 'yup';

export const operatorValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  operational_hours: yup.string().nullable(),
  location: yup.string().nullable(),
  status: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
