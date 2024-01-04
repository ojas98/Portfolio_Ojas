
import type { AppProps } from 'next/app'
import "@/pages/scss/index.scss"
import {League_Spartan,Fira_Code} from 'next/font/google'
const LeagueSpartan = League_Spartan({subsets: ["latin"], weight:["400"]})
const FiraCode = Fira_Code({subsets:["latin"],weight:["300"]})

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
    <style jsx global>{`
        :root {
          --LeagueSpartan: ${LeagueSpartan.style.fontFamily};
          --fira-code: ${FiraCode.style.fontFamily};
        }
      `}</style>
  <Component {...pageProps} />
  </>
  )
  
}
