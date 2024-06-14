import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Popover, Select } from "antd";
import Search from "antd/lib/input/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


const onSearch =()=>{
    
}

export default function SelectDomain() {
    const [domainList, setDomainList] = useState<any>([])
    const [defaultDomain, setDefaultDomain] = useState('')
    const [isActive,setIsActive] =useState(false);



    useEffect(() => {
        axios.post('/api/ApiAppstore/domain_select').then((res) => {
            let list: any = [];
            res?.data?.data.forEach((item: any, index: any) => {
                list.push({
                    value: item.id,
                    label: item.domain_name,
                })
            })
            setDomainList(list);
            setDefaultDomain(res.data.data[0]?.id);
            console.log(domainList)
        })
    }, [])


    const content = (
        <ContentWrap>
            <div className="popover_header">
                <div className="popover_input">
                    <Input size="large"  suffix={<SearchOutlined />}
                        placeholder="搜索店铺名称/handle/主域名"
                    />
                </div>
            </div>
            <div className="popover_list_wrap">
            {

            }
            </div>

        </ContentWrap>
    )

    return (
        <Scoped>
            <Popover content={content} className="title" 
                onOpenChange={(open)=>{
                    setIsActive(open);
                }}
                trigger="click">
                <div>
                    <h4>{defaultDomain}</h4>
                    <DownOutlined style={{
                        transition: 'all 0.3s ease',
                        color: (isActive?'green':''),
                    }} />
                </div>
            </Popover>
        </Scoped>
    )
}

const Scoped = styled.div`
  .title{
    display: flex;
    align-content: center;
    transition: all 0.3s ease;
    color: #242833;
    h4{
        max-width: 200px;
        margin: 0;
        margin-right: 10px;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
    }
    .isActive{
        transform: rotate(180deg);
    }

  }
`
const ContentWrap =styled.div`
    width: 420px;
    height:418px;
    padding:0;
    .popover_header{
        padding: 20px;
        border-bottom: 1px solid #eef1f7;
    }
    .Popover_list{

    }

`
