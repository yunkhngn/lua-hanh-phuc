import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { Navigate } from "@/components/template";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Navigate />
    </ChakraProvider>
  )
}
