import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroImg from '@site/static/img/Hero.jpg';
import Translate from '@docusaurus/Translate'

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
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function MyHero() {
  const {siteConfig} = useDocusaurusContext();
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
          <button className={styles.button}>
            <a className={styles.hero_a} href='/docs/intro'>
              Click
            </a>
          </button>
          <span className={styles.buttonLeftText}>
            Get Started. <br /> <Translate id="homepage.hero.index3">开启学习之旅.</Translate>
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
      </main>
    </Layout>
  );
}
