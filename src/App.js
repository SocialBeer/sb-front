import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './components/AppRouter'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/defaultTheme'
import { colors } from './styles/colors'
import { sizes } from './styles/sizes'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...defaultTheme, colors, sizes }}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
