import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Form, Input, Select } from 'antd'
import { Provider } from './../../.umi-production/plugin-model/index';
import ProductDataCard from '@/components/Card/ProductDataCard';
import ProductImgCard from '@/components/Card/ProductImgCard';
import PriceOrTransactionCard from '@/components/Card/PriceOrTransactionCard';
import StockCard from '@/components/Card/StockCard';
import CustomsInformation from '@/components/Card/CustomsInformation';
import MultipleStylesCard from '@/components/Card/MultipleStylesCard';
import styled from 'styled-components';
import ProductSettingsCard from '@/components/Card/ProductSettingsCard';



export default function New() {


    return (
        <Scoped>
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
                            <StockCard/>
                            <CustomsInformation/>
                            <MultipleStylesCard/>
                        </div>
                        <div className='mc-layout-extra'>
                            <ProductSettingsCard/>

                        </div>
                    </div>
                </div>
            </div>
        </Scoped>
    )
}

const Scoped = styled.div`
.mc-layout-wrap{
    display: flex;
    justify-content: center;
    min-width: 510px;
    .mc-layout {
        width: 100%;
        max-width: 1200px;
        margin: '0 auto';
    
        .mc-header {
            color: rgb(36, 40, 51);
            font-size: 30px;
            height: 42px;
            font-weight: bold;
            margin: 8px 0px 24px;

            display: flex;
            justify-content: space-between;
            align-content: center;
    
            &-left {
                display: flex;
                flex-direction: row;
                align-items: center;
    
                &-secondary {
                    height: 32px;
                    width: 32px;
                    border: #d7dbe7 1px solid;
                    border-radius: 4px;
    
                    display: flex;
                    justify-content: center;
                    align-content: center;
    
                    &-icon {
                        font-size: 18px;
                    }
                }
    
                &-content {
                    margin-left: 12px;
                    font-size: 20px;
                }
            }
    
            &-right {
                display: flex;
                align-items: center;
                width: 70px;
                > .selector{
                    height: 36px;
                }
            }
        }

        &-main {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
        }

        &-content {
            flex: 9;
            min-width: 510px;

            display: flex;
            flex-direction: column;
            gap:20px

        }

        &-extra {
            flex:1;
            min-width: 285px;
            display: flex;
            flex-direction: column;
            gap:20px;

            .ant {
                &-card {
                    background-color: #f7f8fb;
                }
            }
            
        }
    }
}
`
