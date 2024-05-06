import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Components from "@/components";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  useEffect(() => {
    if (isUserAuthenticated) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <Components.Layout>
      <Component {...pageProps} />
    </Components.Layout>
  );
}
