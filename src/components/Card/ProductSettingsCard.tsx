import { QuestionCircleOutlined } from "@ant-design/icons";
import { Link } from "@umijs/max";
import { Card, Form, Input, Switch, Tooltip } from "antd";
import styled from "styled-components";

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};


type WebChannel = {
    name: string;
    linkText?: string;
    url?: string;
}

const WebChannelArray: WebChannel[] = [
    {
        name: '在线商店',
        linkText: '指定上线时间',
        url: '#'
    }, {
        name: '贴文销售',
    }, {
        name: '消息中心',
    }, {
        name: 'Google',
    }, {
        name: 'WhatsApp'
    }, {
        name: 'Facebook',
    }, {
        name: 'Telegram'
    }, {
        name: '直播销售'
    }
]


type market = {
    name: string;
    linkText?: string;
    url?: string;
}

const managerArray: market[] = [
    {
        name: '新加坡'
    }
]

export default function ProductSettingsCard() {
    return (
        <Scoped>
            <Card title='商品设置' className="card">
                <div className="item between">
                    <span>上架商品</span>
                    <Switch defaultChecked onChange={onChange} />
                </div>
                <div className="item">
                    <div>发货</div>
                </div>
                <div className="item webChannelContent" >
                    <div className="between">
                        <div>销售渠道</div>
                        <Link to='#'>管理</Link>
                    </div>
                    {
                        WebChannelArray.map((item, index) => (
                            <div key={index} className="between">
                                <div>·&nbsp;&nbsp;{item.name}</div>
                                <Link to={item.url || '#'}>{item.linkText}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className="market item">
                    <div className="title between">
                        <div>市场</div>
                        <Link to='#'>管理</Link>
                    </div>
                    {
                        managerArray.map((item, index) => (
                            <div key={index} className="between">
                                <div>·&nbsp;&nbsp;{item.name}</div>
                                <Link to={item.url || '#'}>{item.linkText}</Link>
                            </div>
                        ))
                    }
                </div>
                <Form layout="vertical">
                    <Form.Item style={{
                        fontWeight: 600
                    }} label={
                        <>
                            SKU
                            <Tooltip title="这里是关于用户名的额外信息">
                                <span style={{ color: '#999', marginLeft: '4px', cursor: 'pointer' }}>
                                    <QuestionCircleOutlined />
                                </span>
                            </Tooltip>
                        </>
                    } name='originPrice' className="price-item">
                        <Input
                            defaultValue={1000}
                            className="ant-input"
                        />
                    </Form.Item>
                    <Form.Item label={
                        <>
                            重量
                            <Tooltip title="这里是关于用户名的额外信息">
                                <span style={{ color: '#999', marginLeft: '4px', cursor: 'pointer' }}>
                                    <QuestionCircleOutlined />
                                </span>
                            </Tooltip>
                        </>
                    } name='originPrice' className="price-item">
                        <Input
                            defaultValue={1000}
                            className="ant-input"
                        />
                    </Form.Item>
                    <Form.Item label={
                        <>
                            商品厂商
                            <Tooltip title="这里是关于用户名的额外信息">
                                <span style={{ color: '#999', marginLeft: '4px', cursor: 'pointer' }}>
                                    <QuestionCircleOutlined />
                                </span>
                            </Tooltip>
                        </>
                    } name='originPrice' className="price-item">
                        <Input
                            defaultValue={1000}
                            className="ant-input"
                        />
                    </Form.Item>
                    <Form.Item label={
                        <>
                            标签
                            <Tooltip title="这里是关于用户名的额外信息">
                                <span style={{ color: '#999', marginLeft: '4px', cursor: 'pointer' }}>
                                    <QuestionCircleOutlined />
                                </span>
                            </Tooltip>
                        </>
                    } name='originPrice' className="price-item">
                        <Input
                            defaultValue={1000}
                            className="ant-input"
                        />
                    </Form.Item>
                    <Form.Item label={
                        <>
                            shang
                            <Tooltip title="这里是关于用户名的额外信息">
                                <span style={{ color: '#999', marginLeft: '4px', cursor: 'pointer' }}>
                                    <QuestionCircleOutlined />
                                </span>
                            </Tooltip>
                        </>
                    } name='originPrice' className="price-item">
                        <Input
                            defaultValue={1000}
                            className="ant-input"
                        />
                    </Form.Item>
                </Form>

            </Card>
        </Scoped>
    )
}


const Scoped = styled.div`
    .card{
        background-color: #f7f8fb;
    }
    .item{
        margin-bottom: 20px;
    }
    .between{
        display: flex;
        justify-content: space-between;
    }
    a{
        font-weight: 400;
    }
    .webChannelContent{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .market{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .ant-input{
        height: 36px;
    }
`