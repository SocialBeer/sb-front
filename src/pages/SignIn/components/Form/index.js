import * as yup from 'yup'
import { useFormik } from 'formik'

import { FormContainer } from './styled'
import { Input } from '../../../../components/Input'
import { Link } from '../../../../components/Link'
import { useDispatch } from 'react-redux'
import { authApi } from '../../../../store/auth/thunks'
import { useRequestStatus } from '../../../../store'
import { LoadingButton } from '../../../../components/Button'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter an email address.')
    .email('Please enter a valid email.'),
  password: yup.string().required('Please enter a password.'),
})

export const Form = () => {
  const dispatch = useDispatch()

  const requestStatus = useRequestStatus([authApi.login.typePrefix])

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
    dispatch(
      authApi.login({
        username: formik.values.email,
        password: formik.values.password,
      })
    )
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
      <LoadingButton
        variant="contained"
        onClick={handleSubmit}
        loading={requestStatus.loading[authApi.login.typePrefix]}
      >
        Sign in
      </LoadingButton>
    </FormContainer>
  )
}
