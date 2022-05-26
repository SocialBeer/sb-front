import { FormContainer } from './styled'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { Link } from '../../../../components/Link'

export const Form = () => {
  return (
    <FormContainer>
      <Input variant="outlined" label="Email" />
      <Input variant="outlined" label="Password" />
      <Link to="/">Forgot password?</Link>
      <Button variant="contained">Sign in</Button>
    </FormContainer>
  )
}
