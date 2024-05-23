import { ArrowLeftOutlined } from '@ant-design/icons'
import './New.scss'
import { Button, Card, ConfigProvider, Form, Input, Select } from 'antd'
import { Provider } from './../../.umi-production/plugin-model/index';
import ProductDataCard from '@/components/Card/ProductDataCard';
import ProductImgCard from '@/components/Card/ProductImgCard';
import PriceOrTransactionCard from '@/components/Card/PriceOrTransactionCard';




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
                        <Select className='selector' defaultValue="更多" />
                    </div>
                </div>
                <div className='mc-layout-main'>
                    <div className='mc-layout-content'>
                        <ProductDataCard />
                        <ProductImgCard />
                        <PriceOrTransactionCard />
                    </div>
                    <div className='mc-layout-extra'>
                        <Card>11111111</Card>
                    </div>
                </div>
            </div>
        </div>
    )
}