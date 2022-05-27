import { Header } from '../../components/Header'
import { Container } from './styled'

export const MainLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
