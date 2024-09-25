import "@/styles/globals.css";
import { Navigate, NavBottom, Motion } from "@/components/template";
import { styletron } from "../styletron";
import { Provider as StyletronProvider } from "styletron-react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <StyletronProvider value={styletron}>
      <AnimatePresence initial={ false } mode={ 'wait' }>
        <Motion key={router.pathname}>
          <Component {...pageProps} />
        </Motion>
      </AnimatePresence>
      <Navigate />
      <NavBottom />
    </StyletronProvider>
  );
}
