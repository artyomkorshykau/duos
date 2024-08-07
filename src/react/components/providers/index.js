import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient()

export const Providers = ( { children } ) => {

  return (

    <QueryClientProvider client = { queryClient }>
      <SessionProvider>
        { children }
        <ReactQueryDevtools initialIsOpen = { false }/>
      </SessionProvider>
    </QueryClientProvider>

  )

}