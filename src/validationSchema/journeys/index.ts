import * as yup from 'yup';

export const journeyValidationSchema = yup.object().shape({
  start_time: yup.date().nullable(),
  end_time: yup.date().nullable(),
  vehicle_id: yup.string().nullable().required(),
  toll_booth_id: yup.string().nullable().required(),
  payment_id: yup.string().nullable().required(),
});
