import "../styles/globals.css"
import type { AppProps } from "next/app"

import { ChakraProvider } from "@chakra-ui/react"
import { UserProvider } from "../hooks/useUser"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp
