import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient()

export const Providers = ( { children } ) => {

  return (

    <QueryClientProvider client = { queryClient }>
        { children }
        <ReactQueryDevtools initialIsOpen = { false }/>
    </QueryClientProvider>

  )

}