import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';


function MyAbout() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);
  return (
    <main id="main" ref={mainRef} hidden={true}>
      <div className={styles.aboutHeader}>
        <h2 className="border-0 border-b-4 border-solid border-success">关于本站</h2>
      </div>
      <div className={styles.about}>
        <div>
          <img
            className={styles.aboutProfilePic}
            src={useBaseUrl("img/tom.png")}
          />
        </div>
        <div className={styles.aboutText}>
          <h2>Hello World🏚️</h2>
          <p>
            欢迎来到 Jerry 的数字花园👓镜像站！
            <br />
            🌏主站为：
            <Link
              to="https://note.jerry21.top/">
              Jerry 数字花园 
            </Link>
            <br />
            数字花园是我的知识库，记录我感兴趣的内容，以及个人感悟。
          </p>
          <p>
            👨‍💻我是 <Link to="resume">Jerry</Link>，欢迎一起交流～
          </p>
          <h3>镜像站介绍</h3>
          <p>
           🐳镜像站同步主站全部内容：
          </p>
          <h5>
            工作与生活🏖️
          </h5>
          <p>
            🌅 * <Link to="blog">流水账</Link> ：2023 年工作生活的碎碎念( 流水账日记 )
          </p>
          <h5>
            资料收集🏝️
          </h5>
          <p>
            🚀 互联网上的高价值资料浩如烟海 收录在<Link to="/docs/intro">沧海拾珍</Link> 内的一系子专题中。
          </p>
          <h3>
            镜像站存在的意义📌
          </h3>
          <ul>
            <li>主站专注于写内容，但受限于框架主题导致展示内容受限</li>
            <li>通过Docusaurus.可以学习react,并通过js语言博客页面完全自主可控</li>
            <li>可以集成一些比较有意思的页面or工具</li>
          </ul>
        </div>
      </div>
    </main>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="关于"
      description="Description will go into a meta tag in <head />">
      <main>
        <MyAbout />
      </main>
    </Layout>
  );
}