import {ChakraProvider} from '@chakra-ui/react';
import {ThemeProvider} from '@emotion/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
          <ThemeProvider theme={theme}>
              <Component {...pageProps} />
          </ThemeProvider>
      </ChakraProvider>
  )
}

export default MyApp;
