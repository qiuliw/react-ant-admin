import { Card, Space } from 'antd';

export default () => {
  return (
    <div style={{
      width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <div className="content" style={{
        maxWidth: '1000px',
        width: '100%',
        height: '100vh',
      }}>
        <Space direction="vertical"
        size="large"
        style={{
          width: '100%',
        }}
        >
          <Card title="Default size card" extra={<a href="#">More</a>} style={{width: '100%'}} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Default size card" extra={<a href="#">More</a>} style={{width: '100%'}} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Default size card" extra={<a href="#">More</a>} style={{width: '100%'}} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

        </Space>
      </div>
    </div>
  );
};