import "tailwindcss/tailwind.css";
import "../public/css/index.css";

import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Filipino Project | X - Generosity</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App;