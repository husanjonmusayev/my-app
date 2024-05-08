import "@/styles/globals.css";
import Components from "@/components";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./api/Store";

export default function App({ Component, pageProps }: AppProps) {
  // const { data, error, isLoading } = useGetPokemonByNameQuery("/api/heroes");
  // console.log(11, data);
  return (
    <Provider store={store}>
      <Components.Layout>
        <Component {...pageProps} />
      </Components.Layout>
    </Provider>
  );
}
