import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router'

import { Router } from './components/Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { GithubContextProvider } from './contexts/GithubContextProvider'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <GithubContextProvider>
          <Router />
        </GithubContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
