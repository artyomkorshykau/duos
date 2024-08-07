import "@/styles/global.scss";
import "@/styles/fonts.scss";
import { Providers } from "@/react/components/providers";


export default function App( { Component, pageProps } ) {

  return (

    <Providers>
      <Component { ...pageProps } />
    </Providers>

  );
}