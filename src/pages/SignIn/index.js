import { Box } from '@mui/material'
import { Card } from '../../components/Card'
import { FixCenterContainer } from '../../components/containers'
import { Link } from '../../components/Link'
import { MainLayout } from '../../layouts/MainLayout'
import { getUnitAsPixels, getUnitsAsPixels } from '../../styles/sizes'
import { Heading3, SubHeading } from '../../styles/typography'
import { Form } from './components/Form'

export const SignIn = () => {
  return (
    <MainLayout>
      <FixCenterContainer>
        <Box marginTop={getUnitAsPixels(3)}>
          <Card p={getUnitsAsPixels(0, 3, 4, 3)}>
            <Heading3>Sign in</Heading3>
            <Box m={getUnitsAsPixels(-3, 0, 4, 0)}>
              <SubHeading>Stay updated on your social beer world</SubHeading>
            </Box>
            <Form />
          </Card>
        </Box>
        <Box marginTop={getUnitAsPixels(3)}>
          New to Social Beer? <Link to="/sign-up">Join now</Link>
        </Box>
      </FixCenterContainer>
    </MainLayout>
  )
}
