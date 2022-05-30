import { FormContainer } from './styled'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { Link } from '../../../../components/Link'
import { useFormik } from 'formik'

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  })
  const handleSubmit = () => {}
  return (
    <FormContainer>
      <Input
        variant="outlined"
        label="Email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        variant="outlined"
        label="Password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Link to="/">Forgot password?</Link>
      <Button variant="contained" onClick={handleSubmit}>
        Sign in
      </Button>
    </FormContainer>
  )
}
