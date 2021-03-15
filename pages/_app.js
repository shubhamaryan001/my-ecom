import "../styles/globals.css";
import React, { setGlobal } from "reactn";
import addReactNDevTools from "reactn-devtools";
function MyApp({ Component, pageProps }) {
  setGlobal({
    cards: [],
    disabled: false,
    initial: "values",
    x: 500,
  });
  addReactNDevTools();

  return <Component {...pageProps} />;
}

export default MyApp;
