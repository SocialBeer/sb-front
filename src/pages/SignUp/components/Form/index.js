import * as yup from 'yup'
import { useFormik } from 'formik'

import { FormContainer } from './styled'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter an email address.')
    .email('Please enter a valid email.'),
  firstName: yup.string().required('First name is a required field.'),
  lastName: yup.string().required('Last name is a required field.'),
  country: yup.string().required('Country name is a required field.'),
  password: yup.string().required('Please enter a password.'),
})

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      country: '',
      password: '',
    },
    validationSchema,
  })
  const handleSubmit = () => {}

  return (
    <FormContainer>
      <Input
        variant="outlined"
        label="First name"
        name="firstName"
        type="text"
        required
        size="small"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        error={formik.touched.firstName && formik.errors.firstName}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <Input
        variant="outlined"
        label="Last name"
        name="lastName"
        type="text"
        size="small"
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        error={formik.touched.lastName && formik.errors.lastName}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <Input
        variant="outlined"
        label="Email"
        name="email"
        size="small"
        type="text"
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Input
        variant="outlined"
        label="Country/Region"
        name="country"
        size="small"
        type="text"
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
        error={formik.touched.country && formik.errors.country}
        helperText={formik.touched.country && formik.errors.country}
      />
      <Input
        variant="outlined"
        label="Password"
        name="password"
        size="small"
        type="password"
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Agree & Join
      </Button>
    </FormContainer>
  )
}
