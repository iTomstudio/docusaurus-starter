import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function MyAbout() {

  const MyComponent = () => {
    // const message = 123
    // console.log(message)
    return <div>{/* ... */}</div>;
    // return <div>==</div>;
    // return <div>{isBrowser ? 'Client' : 'Server'}</div>;
  };

  
  return (
    <div>12<MyComponent/></div>
  );
}

// 然后在你的组件中使用 Bootstrap 样式和组件
function MyComponent() {
  return (
    <div className="container">
      <h1>使用 Bootstrap 的组件</h1>
      <button className="btn btn-primary">按钮1</button>
    </div>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="test"
      description="Description will go into a meta tag in <head />">
      <main>
        <MyAbout />
        <MyComponent />
      </main>
    </Layout>
  );
}