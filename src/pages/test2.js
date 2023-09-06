import React from 'react';
import Layout from '@theme/Layout';
import { Button, Timeline } from 'antd';

function TestPage() {
  return (
    <Layout>
      <div>
        <Timeline
          pending="Recording..."
          items={[
            {
              children: 'Create a services site 2015-09-01',
            },
            {
              children: 'Solve initial network problems 2015-09-01',
            },
            {
              children: 'Technical testing 2015-09-01',
            },
          ]}
        />
        <Button type="primary" style={{ marginTop: 16 }} >
          Toggle Reverse
        </Button>
      </div>
    </Layout>
  )
}

export default TestPage;
