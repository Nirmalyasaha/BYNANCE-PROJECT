import { AppProps } from "next/app";
// import { Component } from "react";
import { QueryClient, QueryClientProvider } from "react-query";



export const queryClient= new QueryClient

export default function APP({Component,pageProps}:AppProps){
    return(
        <QueryClientProvider client={queryClient}>
        <Component{...pageProps}/>
        </QueryClientProvider>
    )
}