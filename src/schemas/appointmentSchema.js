import * as yup from 'yup';

export const appointmentSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/,
      'Email is invalid.'
    )
    .required('Email is required'),
  address: yup.string().required('Address is required.'),
  age: yup
    .string()
    .required("Child's age is required.")
    .matches(/^[0-9]*$/, 'Age should contain only numbers.')
    .matches(/^(0|[1-9]|1[0-8]|18)$/, 'Age age should be less then 18.'),
  name: yup
    .string()
    .required("Father's or mother's name is required.")
    .min(3, 'Your name should contain 3 charactes or more.'),
  phone: yup
    .string()
    .required('Phone is required.')
    .matches(/^\+?\d{12}$/, 'Number format +380961234567'),
  comment: yup.string().required('Comment is required.'),
});
