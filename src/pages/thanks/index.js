import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import styles from '../about/about.module.css';
import { Row, Col } from 'antd';
import useBaseUrl from "@docusaurus/useBaseUrl";

function MyThanks() {
  const imgList = [
    { src: useBaseUrl("img/docusaurus.png"), alt: 'Docusaurus', title: 'Docusaurus', description: '博客框架' },
    { src: useBaseUrl("img/png_netlify_light.png"), alt: 'netlify', title: 'netlify', description: 'PaaS 服务' },
    { src: "https://dash.zeabur.com/logo-dark.svg", alt: 'Zeabur', title: 'Zeabur', description: '评论and分析的PaaS 服务' },
    { src: "https://aircode.io/dashboard-assets/logo_icon_dark.57e92d77.svg", alt: 'AirCode', title: 'AirCode', description: '云函数服务' },
    { src: useBaseUrl("img/favicon.ico"), alt: 'Image 5', title: 'Title 5', description: 'Description 5' },
  ];
  return (
    <div>
      <div className={styles.aboutHeader}>
        <h2 className="border-0 border-b-4 border-solid border-success">本站采用的技术</h2>
      </div>
      <Row justify="center" gutter={[8, 10]}>
      {imgList.map((img, idx) => (
        <Col xs={24} sm={24} md={12} lg={6} key={idx}>
          <div className="text--center">
            <img src={img.src} alt={img.alt} style={{width: '32px', height: '32px'}} />
          </div>
          <div className="text--center padding-horiz--md">
            <h3>{img.title}</h3>
            <p>{img.description}</p>
          </div>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default function Home() {
  return (
    <Layout >
      <main>
        <MyThanks />
      </main>
    </Layout>
  );
}