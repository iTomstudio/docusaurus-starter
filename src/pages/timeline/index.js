import React, { useEffect, useRef, useState } from "react";
import Layout from '@theme/Layout';
import { ConfigProvider, Space, Timeline } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
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
        <h2 >⏰建站时间线</h2>
      </div>
      <div className={styles.about}>
        <div>
          <img
            className={styles.aboutProfilePic}
            src={useBaseUrl("img/tom.png")}
          />
        </div>
        <div className={styles.aboutText}>
          <div>
            <ConfigProvider
              theme={{
                components: {
                  Timeline: {
                    dotBg: 'rgba(255, 0, 0, 0)',
                  }
                },
              }}
            >
            <Space>
            <Timeline
              pending="加紧建设中..."
              reverse={true}
              mode={'left'}
              items={[
                {
                  color: 'green',
                  label: '2015-09-01',
                  children: 'Create a services site ',
                },
                {
                  color: 'red',
                  label: '2015-09-01',
                  children: 'Solve initial network problems ',
                },
                {
                  color: 'rgba(0, 204, 255, 0.5)',
                  dot: <SmileOutlined />,
                  label: '2015-09-01',
                  children: 'Technical testing ',
                },
              ]}
            />
            </Space>
            </ConfigProvider>
          </div>
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