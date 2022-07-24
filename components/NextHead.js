import React from "react";
import Head from "next/head";

const NextHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default NextHead;
