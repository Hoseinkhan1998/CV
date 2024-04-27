import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import FlareCursor from "../components/FlareCursor";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
        <AnimatePresence mode="wait">
          <Component {...pageProps} />;
          <FlareCursor />
        </AnimatePresence>
  )
}
