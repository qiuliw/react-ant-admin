import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Popover, Select, Tag } from "antd";
import Search from "antd/lib/input/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


const onSearch = () => {

}

export default function SelectDomain() {
    const [domainList, setDomainList] = useState<any>([])
    const [defaultDomain, setDefaultDomain] = useState('')
    const [isActive, setIsActive] = useState(false);



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
                    <Input size="large" suffix={<SearchOutlined />}
                        placeholder="搜索店铺名称/handle/主域名" />
                </div>
            </div>
            <div className="popover_item">
                <img  src='/img/storeLogo.png' className="storeLogo" />
                <div className="storeInfo">
                    <div className="storeName">
                        <div className="shopTitle">
                            qiuqiuqiu
                        </div>
                        <Tag className="tag" style={{
                            display: 'flex',
                            alignContent: 'center'
                        }}>
                            <span className="tag-right">
                                <span className="tag-dot tag-dot-error"/>
                            </span>
                            已停用
                        </Tag>

                    </div>
                    <div className="shopInfo">
                        rejgfpajrp
                    </div>
                    <div className="email">
                        rejgfpajrp.matacart.com
                    </div>
                </div>

                
            </div>


            <div className="popover_footer">
                <Button type="primary" size='large' block>
                    管理店铺
                </Button>
            </div>

        </ContentWrap>
    )

    return (
        <Scoped>
            <Popover content={content} className="title"
                onOpenChange={(open) => {
                    setIsActive(open);
                }}
                trigger="click">
                <div>
                    <h4>{defaultDomain}</h4>
                    <DownOutlined style={{
                        transition: 'all 0.3s ease',
                        color: (isActive ? 'green' : ''),
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
const ContentWrap = styled.div`
    width: 420px;
    height:418px;
    padding:0;
    .popover_header{
        padding: 5px 10px 18px 10px;
        border-bottom: 1px solid #eef1f7;
    }
    .popover_item{
        padding: 18px 10px;
        border-bottom: 1px solid #eef1f7;
        display:flex;
        .storeLogo{
            width: 60px;
            height: 60px;
            margin-right: 12px;
            border-radius: 3px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
        .storeInfo{
            flex:1;
            overflow:hidden;
            .storeName{
                display:flex;
                width:100%;
                align-items:center;
                justify-content:space-between;
                .shopTitle{
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 22px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .tag{
                    border-radius: 9999px;
                    background-color: #ffebe7;
                    border: 1px solid rgba(248,97,64,.2);
                    font-weight:400;
                    .tag-right{
                        display: flex;
                        flex-wrap: wrap;
                        align-content: center ;
                        .tag-dot{
                            display:inline-block;
                            border-radius: 50%;
                            margin-right: 5px;
                            height: 4px;
                            width: 4px;
                        }
                        .tag-dot-error{
                            background-color: #f86140;
                        }
                    }
                }


            }
            .shopInfo{
                margin-top: 2px;
                color: #7a8499;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .email{
                color: #7a8499;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
            }
        }
    }
    .popover_footer{
        padding: 18px 10px 5px 10px;
    }

`
