import { createGlobalStyle } from 'styled-components'
import { COLORS } from "@/library/theme";
import { SIZING } from '@/library/theme';
import Head from 'next/head';
import { StateContext } from '@/context/StateContext';
import BuyModal from '@/components/Modals/BuyModal';
import { Toaster } from 'react-hot-toast';
import { ThirdwebProvider} from "@thirdweb-dev/react";
import '@/library/global.css'

export const GlobalStyle = createGlobalStyle`
  * 
  {
    font-size: 1.157vw;
    line-height: 100%;
    font-family: "Haskoy Regular";
    color: ${COLORS.Black900Default};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none; 
    a {
      color: inherit; 
      text-decoration: none; 
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Trapezoid</title>
        <meta name="description" content="Generative AI NFT marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ThirdwebProvider
          activeChain="avalanche-fuji" clientId="7260de35d8ecfaee9e720cde64590ed5">
      
      <StateContext>
        <BuyModal/>
        <GlobalStyle />
        <Component {...pageProps} />

        <Toaster 
          toastOptions={{
            style: {
              background: 'rgba(8, 7, 8, 0.9)',
              color: COLORS.StandardWhiteDefault,
              borderRadius: SIZING.px4,
              backdropFilter: `blur(${SIZING.px2})`,
            },
            error: {
              iconTheme: {
                primary: 'red',
                secondary: COLORS.StandardWhiteDefault,
              },
            },
          }}
       />
        </StateContext>
       </ThirdwebProvider>
    </>
  )
}

