import "@/styles/globals.css";
import { Navigate } from "@/components/template";
import { styletron } from "../styletron";
import { Provider as StyletronProvider } from "styletron-react";

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
      <Navigate />
    </StyletronProvider>
  )
}
