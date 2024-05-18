import React, { useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
// import  Collapse  from './Collapse';
import Drawer from '../Drawer/Drawer';
import PriceRangeSelector from './PriceRangeSelector';
import PriceRangeInput from '../Input/PriceRangeInput';
import './MoreSelect.scss'
import ProductTypeSelector from './ProductTypeSelector';
import CustomizeProductTypeSelector from './CustomizeProductTypeSelector';

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
    children: (
    <>
      <ProductTypeSelector/>
      <div className={'cleanText'}>清除</div>
    </>)
    ,
  },
  {
    key: '3',
    label: '自定义商品类型',
    children: (
      <>
      <CustomizeProductTypeSelector/>
      <div className={'cleanText'}>清除</div>
      </>
    ),
  },{
    key: '4',
    label: '商品状态',
    children: (
      <>
      <CustomizeProductTypeSelector/>
      <div className={'cleanText'}>清除</div>
      </>
    ),
  },{
    key: '5',
    label: '自定义商品类型',
    children: (
      <>
      <CustomizeProductTypeSelector/>
      <div className={'cleanText'}>清除</div>
      </>
    ),
  },{
    key: '6',
    label: '自定义商品类型',
    children: (
      <>
      <CustomizeProductTypeSelector/>
      <div className={'cleanText'}>清除</div>
      </>
    ),
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
                headerPadding: '12px 40px 12px 16px',
                contentPadding: '0 16px'
                
              }
            }
          }}

        >
          <Collapse expandIconPosition={'end'} defaultActiveKey={['1']} ghost items={items} />
        </ConfigProvider>
      </Drawer>
    </>
  );
};
