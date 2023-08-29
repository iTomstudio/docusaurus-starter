import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

function MyAbout() {

  const MyComponent = () => {
    const message = 123
    console.log(message)
    return <div>{/* ... */}</div>;
    // return <div>==</div>;
    // return <div>{isBrowser ? 'Client' : 'Server'}</div>;
  };

  
  return (
    <div>12<MyComponent/></div>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <MyAbout />
      </main>
    </Layout>
  );
}