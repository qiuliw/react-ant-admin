import React, { ReactNode, useEffect, useState } from 'react';
import { Popover, Switch, Table, Tooltip } from 'antd';
import type { GetProp, TableColumnsType, TableProps } from 'antd';
import qs from 'qs';
import { CopyOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type ColumnsType<T> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface DataType {
    key: React.Key;
    imgUrl: string;
    name: string;
    price: number;
    inventory: number;
    state:boolean;
  }
  
  // ToolTip内容
  const content : ReactNode = (<>
      <div>·在线商店</div>
      <div>·贴文销售</div>
      <div>·消息中心</div>
      <div>·Google</div>
      <div>·WhatsApp</div>
      <div>·Facebook</div>
      <div>·Telegram</div>
  
  </>)

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}

// const columns: ColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     sorter: true,
//     render: (name) => `${name.first} ${name.last}`,
//     width: '20%',
//   },
//   {
//     title: 'Gender',
//     dataIndex: 'gender',
//     filters: [
//       { text: 'Male', value: 'male' },
//       { text: 'Female', value: 'female' },
//     ],
//     width: '20%',
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//   },
// ];



const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
    //列表数据
    const [data,setData] = useState<DataType[]>([]);
    //数据初始化
    const initializeData = async () => {
        let tempData: DataType[] = [];
        for(let i=0;i<40;++i){
            tempData.push({
                key: i.toString(),
                imgUrl: '#',
                name: i.toString(),
                price: i,
                state: false,
                inventory: i
            });
        }
        setData(tempData);
    };

    useEffect(() => {  
        initializeData();  
      }, []); 
    

    // 状态
    const onChangeSwich = (index: number) => {
        let oldDataItem = data[index]
        let newDataItem = {
            ...oldDataItem,
            state: !oldDataItem.state
        }
        let newData = [...data];
        newData[index].state = !oldDataItem.state
        setData(newData);
    };
  const columns: TableColumnsType<DataType> = [
    {
      title: '商品',
      dataIndex: 'name',
      width: 170,
    },
    {
      title: '售价',
      dataIndex: 'price',
      width: 150,
    },
    {
      title: '库存数',
      dataIndex: 'inventory',
      width: 120,
    },
    {
      title: '状态',
      dataIndex: 'state',
      width: 120,
      render: (text, record, index) => 
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 9,
            alignContent: 'center',
        }}>
            <Switch style={{
                position: 'relative',
                top: "3px",
            }} size='small' checked={data[index].state} onChange={()=>{onChangeSwich(index)}} />
            <Popover content={content} title="销售渠道" style={{
                width: '20px'
            }} trigger="click">
                {data[index].state?'上架': '下架'}
            </Popover>
        </div>,
    },
    {
        title: '操作',
        width: 100,
        fixed: 'right',
        
        render: (index)=>{return(
        <div style={{
            color: '#474f5e',
            fontSize: 20,
            display: 'flex',
            
        }} >
            <ButtonIcon>
                <div className='wrap'>
                <Tooltip title="预览">
                    <EyeOutlined/>
                </Tooltip>
                </div>
            </ButtonIcon>
            <ButtonIcon>
                <Tooltip title="复制">
                    <div className='wrap'>
                    <CopyOutlined />
                    </div>
                </Tooltip>
            </ButtonIcon>
        </div>
        
        )}
    }
  ];

  const fetchData = () => {
    // setLoading(true);
    // fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
    //   .then((res) => res.json())
    //   .then(({ results }) => {
    //     setData(results);
    //     setLoading(false);
    //     setTableParams({
    //       ...tableParams,
    //       pagination: {
    //         ...tableParams.pagination,
    //         total: 200,
    //         // 200 is mock data, you should read it from server
    //         // total: data.totalCount,
    //       },
    //     });
    //   });
  };

//   useEffect(() => {
//     fetchData();
//   }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

  const handleTableChange: TableProps['onChange'] = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.key}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default App;


const ButtonIcon = styled.div`
.wrap{
    height:36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius:4px;
    &:hover{
        background-color: rgba(60, 181, 218, 0.114);
        cursor:pointer;
    }
}
`