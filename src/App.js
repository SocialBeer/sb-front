import { ThemeProvider } from 'styled-components'
import { AppRouter } from './components/AppRouter'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/defaultTheme'
import { colors } from './styles/colors'
import { sizes } from './styles/sizes'

const App = () => {
  return (
    <>
      <ThemeProvider theme={{ ...defaultTheme, colors, sizes }}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App
