import "@/styles/globals.css";
import Components from "@/components";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./api/Store";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
      <Components.Layout>
        <Component {...pageProps} />
      </Components.Layout>
    </Provider>
  );
}
