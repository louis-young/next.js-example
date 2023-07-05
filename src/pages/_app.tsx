import type { AppProps } from "next/app";

import { ApplicationLayout } from "@/components/ApplicationLayout";
import { ApplicationProviders } from "@/components/ApplicationProviders";
import { Sidebar } from "@/components/Sidebar";
import { environmentVariables } from "@/constants/environment-variables/index.mjs";
import "@/stylesheets/index.css";
import Head from "next/head";

if (environmentVariables.NEXT_PUBLIC_ENABLE_API_MOCKING) {
  require("../mocks");
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link href="/images/favicon.ico" rel="icon" />
      </Head>

      <ApplicationProviders>
        <ApplicationLayout
          content={<Component {...pageProps} />}
          sidebar={<Sidebar />}
        />
      </ApplicationProviders>
    </>
  );
};

export default App;
