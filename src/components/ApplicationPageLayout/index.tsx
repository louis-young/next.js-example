import type { ReactNode } from "react";

import Head from "next/head";

import { Heading } from "../Heading";
import { Spacer } from "../Spacer";

interface ApplicationPageLayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export const ApplicationPageLayout = ({
  children,
  pageTitle,
}: ApplicationPageLayoutProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <section className="h-screen overflow-y-scroll p-10">
        <header>
          <Heading headingLevel="h1">{pageTitle}</Heading>
        </header>

        <Spacer size="large" />

        {children}
      </section>
    </>
  );
};
