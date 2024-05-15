import Callapse from '@/components/Card/OpenStoreGuidance';
import { Card, Space } from 'antd';
import styles from './index.scss';
import DataCard from '@/components/Card/DataCard';
import TextCard, {ButtonEasy} from '@/components/Card/TextCard'
export default () => {

  const buttons: ButtonEasy[] = [
    {
    text: '查看',
    url: '#'
    },{
      text: 'hhhh',
      url: '#'
    }
]


  return (
    <div 
    style={{
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
          <DataCard/>


          <Callapse/>

          <TextCard title="关于" text="欢迎使用" buttons={buttons} />
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