import React, { useState, useRef, useEffect } from "react";
import Link from '@docusaurus/Link';
import { Button, Popconfirm } from 'antd';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroImg from '@site/static/img/Hero.jpg';
import Translate from '@docusaurus/Translate'
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const svgList = [
  {
    title: 'github',
    Svg: require('../../static/img/github.svg').default,
    color: 'gray',
    link: 'https://github.com/iTomstudio',
  },
  {
    title: 'wechat',
    Svg: require('../../static/img/wechat.svg').default,
    color: '#64dd17',
    link: 'https://mp.weixin.qq.com/s/ytNsiyIjCb-URVLY90uSMw',
  },
]
const Svg = ({ Svg, color, title, link }) => {
  // return (
  //   <a href={link} target='_blank'>
  //     <Svg className={styles.svg} style={{ fill: color }} />
  //   </a>
  // )
  // 定制化主页svg点击动作
  const confirm = (e) => {
    window.open('https://github.com/');
  };
  if (title === 'github') {
    // 在这里编写 title 为 'github' 时的逻辑
    return (  
      <Popconfirm
        title="github 社区"
        description="是否了解该网站存在的网络问题?"
        onConfirm={confirm}
        okText="前往"
        cancelText="取消"
      >
        <Svg className={styles.svg} style={{ fill: color }} />
      </Popconfirm>
    )
  } else if (title === 'wechat') {
    // 在这里编写 title 为 'wechat' 时的逻辑
    return (
      <Link to="resume"><Svg className={styles.svg} style={{ fill: color }}/></Link>
    )
  } else {
    // 在这里编写其他 title 值时的逻辑
  }
}

function MyHero() {
  const [loading, setLoading] = useState(false);
  const onClick = () => {
    setLoading(true);
  };
  
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          Always <br /> Ready to Code.
        </h1>
        <p className={styles.leftContainer_p}>
          <Translate id="homepage.hero.index1">
            我是 Jerry,热爱计算机的一切,
          </Translate>
            <br />
          <Translate id="homepage.hero.index2">
            我在这里记录知识。
          </Translate>
        </p>
        <div className={styles.buttonContainer}>
          <Button className={styles.button} size={"large"} loading={loading} onClick={onClick}>
            <Link className={styles.hero_a} >Click</Link>
          </Button>
          <button className={styles.button}>
            <a className={styles.hero_a} href='/soup'>
              Click
            </a>
          </button>
          <span className={styles.buttonLeftText}>
            Get Started. <br /> <Translate id="homepage.hero.index3">先来一碗鸡汤.</Translate>
          </span>
          <div className={styles.svgContainer}>
            {svgList.map((item, index) => {
              return <Svg {...item} key={item.title} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='HeroImg' />
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <MyHero />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
