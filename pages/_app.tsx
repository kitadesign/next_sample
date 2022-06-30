import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
})

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`

function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Box>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  )

}

export default App
