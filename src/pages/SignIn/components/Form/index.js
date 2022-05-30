import * as yup from 'yup'
import { useFormik } from 'formik'

import { FormContainer } from './styled'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { Link } from '../../../../components/Link'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter an email address.')
    .email('Please enter a valid email.'),
  password: yup.string().required('Please enter a password.'),
})

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  })
  const handleSubmit = () => {
    console.log(formik.validateForm())
  }

  return (
    <FormContainer>
      <Input
        variant="outlined"
        label="Email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        helperText={formik.errors.email}
      />
      <Input
        variant="outlined"
        label="Password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={!formik.errors.email && formik.errors.password}
        helperText={formik.errors.password}
      />
      <Link to="/">Forgot password?</Link>
      <Button variant="contained" onClick={handleSubmit}>
        Sign in
      </Button>
    </FormContainer>
  )
}
