import { TrademarkCircleOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'MataCart',
          title: 'MataCart',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <TrademarkCircleOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'MataCart Pro',
          title: 'MataCart Pro',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
