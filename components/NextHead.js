import React from "react";
import Head from "next/head";

const NextHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo@2x.png" />
    </Head>
  );
};

export default NextHead;
