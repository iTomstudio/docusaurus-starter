import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';
import HeroImg from '@site/static/img/Hero.jpg';


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
        <h2 className="border-0 border-b-4 border-solid border-success">Who am I</h2>
      </div>
      <div className={styles.about}>
        <div>
          <img
            className={styles.aboutProfilePic}
            src={useBaseUrl("img/buildwith.png")}
          />
        </div>
        <div className={styles.aboutText}>
          <h2>Hello World🏚️</h2>
          <p>
            欢迎来到 Jerry 的数字花园！本站是我的知识库，记录我感兴趣的内容，以及个人感悟。
          </p>
          <p>
            🚀 我是 Jerry（ <a href="https://note.jerry21.top/site-build-process/jerry/">👨‍💻Jerry的自我介绍</a>），欢迎一起交流～
          </p>
          <p>
            🌏 本站主要包含如下主题：
          </p>
          <p>
            工作与生活🏖️
          </p>
          <p>
            🎒 * <a href="https://note.jerry21.top/todo-list/jerry-2023/">Jerry的2023</a> 2023 年工作生活的碎碎念( 流水账日记 )
          </p>
          <p>
            🏝️资料收集
          </p>
          <p>
            互联网上的高价值资料浩如烟海 收录在<a href="https://note.jerry21.top/web-folder/">沧海拾珍</a>内的一系子专题中。
          </p>
          <p>
            ## 本站点🌐
          </p>
          
        </div>
      </div>
    </main>
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