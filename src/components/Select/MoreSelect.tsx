import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
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
      <Button size='large' onClick={showDrawer}>
        更多筛选
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open} classNames={{
        content: 'drawer-content'
      }}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Collapse defaultActiveKey={['1']} ghost items={items}/>
      </Drawer>
    </>
  );
};
