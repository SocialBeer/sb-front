import { ThemeProvider } from 'styled-components'
import { AppRouter } from './shared/AppRouter'
import { GlobalStyles } from './styles/global'
import * as styleConstants from './styles/constants'
import { lightTheme } from './styles/theme/light'

const App = () => {
  return (
    <>
      <ThemeProvider {...styleConstants} theme={lightTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App
