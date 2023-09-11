import React, { useEffect, useState } from "react";
import Layout from '@theme/Layout';
import { Spin, Button, Tag } from 'antd';
import styles from './soup.module.css';


function Soup() {
  const [soupText, setSoupText] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchSoup = () => {
    setLoading(true);
    fetch("https://74dhw2gr3m.us.aircode.run/soup", {method: "GET"})
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data); 
        setSoupText(data.data.title)
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchSoup();
  }, []);

  return (
    <div >
      <div className="row">
        <div className={`col col--4 ${styles.soupMiddle}`} > 
          <div className="card-demo">
            <div className="card shadow--md">
              <div className="card__header">
                <h3>🥣毒鸡汤</h3>
              </div>
              <Spin spinning={loading}>
              <div className="card__body">
                <p>
                  {soupText}
                </p>
              </div>
              </Spin>
              <div className="card__footer">
                <Button type="primary" shape="round" size="large" style={{ display: 'block', margin: 'auto' }} onClick={fetchSoup}>再来一碗</Button>
              </div>
              <Tag>接口有点慢，初次可能等待 5 秒，后续为 2 秒</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <Layout
      title="毒鸡汤"
      description="A Beautiful Soup">
      <main>
        <Soup />
      </main>
    </Layout>
  );
}
