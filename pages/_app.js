import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(()=>{
    import ("bootstrap/dist/css/bootstrap.min.css");
    import ("bootstrap/dist/js/bootstrap.min.js");

  },[]);

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
    <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
    </SessionProvider>
  </>
  )
}
