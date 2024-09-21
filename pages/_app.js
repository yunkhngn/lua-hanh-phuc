import "@/styles/globals.css";
import { Navigate, NavBottom } from "@/components/template";
import { styletron } from "../styletron";
import { Provider as StyletronProvider } from "styletron-react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
      <Analytics/>
      <Navigate />
      <NavBottom />
      <SpeedInsights/>
    </StyletronProvider>
  )
}
