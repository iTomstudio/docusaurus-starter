import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../about/about.module.css';


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
        <h2 >Jerry 自我介绍</h2>
      </div>
      <div className={styles.about}>
        <div>
          <img
            className={styles.aboutProfilePic}
            src={useBaseUrl("img/weChat.png")}
          />
        </div>
        <div className={styles.aboutText}>
          <h2>Hello 👋</h2>
          <p>
          我是 Jerry, 一名程序员👨‍💻.
          <br />
          (本科范围内)数学小能手🔢，计算机知识爱好者，动物保护主义。
          <br />
          喜欢学习计算机、编程知识。
          <br />
          <br />
          目前就职于北京的一家互联网公司™️，从事🐍python业务代码的开发。
          <br />
          <br />
          </p>
          <h3>
            热爱探索
          </h3>
          <p>
          🚀探索、求知。在我看来，探索是一件非常有乐趣的事情。
          <br />
          <br />
          💻workflow 是：收集网络资料，应用学习
          <br />
          并使用Obsidian记录双链笔记，在数字花园中记录，在实践中应用，乐此不疲。
          <br />
          我的目标是：<strong>让乐趣最大化🏖️</strong>。
          <br />
          <br />
          </p>
          <h3>
            知识管理爱好者
          </h3>
          <p>
            因为平时接触大量知识，所以要对它们进行记录。
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
      title="个人简介"
      description="Description will go into a meta tag in <head />">
      <main>
        <MyAbout />
      </main>
    </Layout>
  );
}