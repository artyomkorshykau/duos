import "@/styles/global.scss";
import "@/styles/fonts.scss";
import "@/styles/datepicker.scss";
import { Providers } from "@/react/components/providers";


export default function App( { Component, pageProps } ) {

  return (

    <Providers>
      <Component { ...pageProps } />
    </Providers>

  );
}