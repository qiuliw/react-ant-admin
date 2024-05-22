import { ArrowLeftOutlined } from '@ant-design/icons'
import './New.scss'
import { Button, Card, Form, Input, Select } from 'antd'

export default function New() {
    return (
        <div className='mc-layout-wrap'>
            <div className="mc-layout">
                <div className="mc-header">
                    <div className="mc-header-left">
                        <div className="mc-header-left-secondary">
                            <ArrowLeftOutlined className="mc-header-left-secondary-icon" />
                        </div>
                        <div className="mc-header-left-content">添加商品</div>
                    </div>
                    <div className='mc-header-right'>
                        <Select className='selector' defaultValue="更多"/>
                    </div>
                </div>
                <div className='mc-layout-main'>
                    <div className='mc-layout-content'>
                        <Card title="商品信息" className='product-data'>
                            {/* <div className='item'>
                                <div className='title'>
                                    商品标题
                                </div>
                                <Input placeholder='例如：冬季，毛衣' />
                            </div> */}
                            <Form layout='vertical' className='product-form'>
                                <Form.Item label="商品标题" name="product-title">
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item label='商品摘要' name= "product-summary">
                                    
                                </Form.Item>
                            </Form>


                        </Card>
                    </div>
                    <div className='mc-layout-extra'>
                        <Card>11111111</Card>
                    </div>
                </div>
            </div>
        </div>
    )
}