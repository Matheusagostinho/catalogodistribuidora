import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  colors: {
    white: '#EDEDF2',
    black: '#13131a',
    gray: {
      1: '#fff'
    },

    purple:{
      300: '#B232ED',
      500: '#8224AD',
      600: '#491461',
      700: '#52176E',
      800: '#360F47' 
    },
    yellow:{
      400:"#FFBE0D",
      500:"#F2B30C",
      600:"#F2B30C",
      700:"#D9A20B",
      800:"#735606",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black'
      }
    }
  }
})
export default theme