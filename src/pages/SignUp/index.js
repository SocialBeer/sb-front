import { Box } from '@mui/material'
import { Card } from '../../components/Card'
import { Link } from '../../components/Link'
import { MainLayout } from '../../layouts/MainLayout'
import { getUnitAsPixels, getUnitsAsPixel } from '../../styles/sizes'
import { Heading3 } from '../../styles/typography'
import { Form } from './components/Form'

export const SignUp = () => {
  return (
    <MainLayout>
      <Box marginTop={getUnitAsPixels(3)}>
        <Heading3>Make the most of your beer life</Heading3>
        <Card p={getUnitsAsPixel(5, 3, 5, 3)}>
          <Form />
        </Card>
        <Box marginTop={getUnitAsPixels(3)} textAlign="center">
          Already on LinkedIn? <Link to="/sign-in">Sign in</Link>
        </Box>
      </Box>
    </MainLayout>
  )
}
