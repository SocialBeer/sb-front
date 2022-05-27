import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { Button } from '../Button'
import { MainWidthContainer } from '../containers'
import { Icon } from '../Icon'
import { Container, LoginSection } from './styled'

export const Header = () => {
  const { header } = useContext(ThemeContext)

  return (
    <MainWidthContainer>
      <Container>
        <Icon component={<Logo />} color={header.logoColor} />
        <LoginSection>
          <Button variant="outlined">Join now</Button>
          <Button variant="contained">Sign in</Button>
        </LoginSection>
      </Container>
    </MainWidthContainer>
  )
}
