import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  license_plate: yup.string().required(),
  make: yup.string().nullable(),
  model: yup.string().nullable(),
  color: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
