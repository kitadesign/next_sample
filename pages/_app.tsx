import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import { RecoilRoot }from 'recoil'
import theme from 'styled-theming'
import Head from 'next/head'
import { googleTagManagerId } from '../utils/gtm'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '../components/GoogleTagManager'

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
})

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={{ mode: 'light' }}>
        <Box>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
