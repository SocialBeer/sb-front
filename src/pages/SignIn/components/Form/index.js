import * as yup from 'yup'
import { useFormik } from 'formik'

import { FormContainer } from './styled'
import { ErrorMessage, Input } from '../../../../components/Input'
import { Link } from '../../../../components/Link'
import { useDispatch } from 'react-redux'
import { authApi } from '../../../../store/auth/thunks'
import { useRequestStatus } from '../../../../store'
import { Button } from '../../../../components/Button'
import { getUnitAsPixels } from '../../../../styles/sizes'

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
  const handleSubmit = async () => {
    const isValid = !Object.values(await formik.validateForm()).length

    if (isValid) {
      dispatch(
        authApi.login({
          ...formik.values,
        })
      )
    }
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
        helperText={!formik.errors.email && formik.errors.password}
      />
      <Link to="/">Forgot password?</Link>
      <Button
        variant="contained"
        onClick={handleSubmit}
        loading={requestStatus.loading[authApi.login.typePrefix]}
      >
        Sign in
      </Button>

      <ErrorMessage mt={getUnitAsPixels(-2)}>
        {requestStatus.error[authApi.login.typePrefix]}
      </ErrorMessage>
    </FormContainer>
  )
}
