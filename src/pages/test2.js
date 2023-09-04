import React from 'react';
import Layout from '@theme/Layout';
import { Alert } from 'antd';

function TestPage() {
  return (
    <Layout>
      <Alert message= "Success Text" type = "success" />
      </Layout>
  )
}

export default TestPage;
