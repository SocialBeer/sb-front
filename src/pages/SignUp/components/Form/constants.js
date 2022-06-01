import * as yup from 'yup'

export const fields = {
  email: {
    label: 'Email',
    type: 'text',
    required: true,
    getValidation: () =>
      yup
        .string()
        .required('Please enter an email address.')
        .email('Please enter a valid email.'),
  },
  firstName: {
    label: 'First name',
    type: 'text',
    required: true,
    getValidation: () =>
      yup.string().required('First name is a required field.'),
  },
  lastName: {
    label: 'Last name',
    type: 'text',
    required: true,
    getValidation: () =>
      yup.string().required('Last name is a required field.'),
  },
  country: {
    label: 'Country',
    type: 'text',
    required: true,
    getValidation: () =>
      yup.string().required('Country name is a required field.'),
  },
  password: {
    label: 'Password',
    type: 'text',
    required: true,
    getValidation: () => yup.string().required('Please enter a password.'),
  },
}

export const fieldNames = Object.keys(fields)
