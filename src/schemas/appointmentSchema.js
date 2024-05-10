import * as yup from 'yup';

export const appointmentSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/,
      'Email is invalid.'
    )
    .required('Email is required'),
  password: yup
    .string()
    .matches(/^\S*$/, 'Your password should not contain spaces.')
    .required('Password is required.')
    .min(8, 'Password must be at least 8 characters.'),
});
