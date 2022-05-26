import { Box } from '@mui/material'
import { Card } from '../../components/Card'
import { FixCenterContainer } from '../../components/containers'
import { Link } from '../../components/Link'
import { MainLayout } from '../../layouts/MainLayout'
import { Heading3, SubHeading } from '../../styles/typography'
import { Form } from './components/Form'

export const SignIn = () => {
  return (
    <MainLayout>
      <FixCenterContainer>
        <Card padding="0 24px 48px 24px" margin="0 0">
          <Heading3>Sign in</Heading3>
          <SubHeading m="-24px 0 32px 0">
            Stay updated on your social beer world
          </SubHeading>
          <Form />
        </Card>
        <Box marginTop="24px">
          New to Social Beer? <Link to="/">Join now</Link>
        </Box>
      </FixCenterContainer>
    </MainLayout>
  )
}
