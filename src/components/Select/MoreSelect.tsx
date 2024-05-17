import React, { useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Drawer from '../Drawer/Drawer';
import PriceRangeSelector from './PriceRangeSelector';
import PriceRangeInput from '../Input/PriceRangeInput';
import './MoreSelect.scss'
import ProductTypeSelector from './productTypeSelector';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;




const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '价格区间',
    children: (
      <>
        <PriceRangeInput/>
        <div className={'cleanText'}>清除</div>
      </>
    ),
  },
  {
    key: '2',
    label: '商品类型',
    children: <ProductTypeSelector/>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

  

export default function MoreSelect(){

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size='large' onClick={showDrawer}  >
        更多筛选
      </Button>
      <Drawer title='筛选' open={open} onClose={onClose} >
        <ConfigProvider 
          theme={{
            components:{
              Collapse:{
                
              }
            }
          }}

        >
          <Collapse size='large' defaultActiveKey={['1']} ghost items={items} />;
        </ConfigProvider>
      </Drawer>
    </>
  );
};
