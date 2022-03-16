import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
       <ColorModeScript  initialColorMode={theme.config.initialColorMode}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp