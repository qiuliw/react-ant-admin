import { Divider, Form, Cascader, Input, Select, Space,Button } from 'antd'
import './index.scss'
import { ShopTwoTone, GlobalOutlined, NodeIndexOutlined, PayCircleOutlined, MailTwoTone, PhoneTwoTone } from '@ant-design/icons'
import SelectCountry from '../../components/Stores/SelectCountry'
import SelectCurrency from '../../components/Stores/SelectCurrency'
import SelectContryCode from '../../components/Stores/SelectCountryCode'


export default function Product() {

    return (
        <div className='create-warp-flex'>
            <div className="create-warp">
                <div className='create-title'>
                    <div className='create-title-left'>
                      <h3>商品</h3>
                    </div>
                    <div className='create-title-right'>
                    <Button type="primary" style={{ 
                        marginTop: "10px",
                        width: "88px",height: "36px",fontSize: "16px"}}>
                        创建商品
                    </Button>
                    </div>
                </div>
                <div className='create-content'>

                </div>
            </div>
        </div>
    )
}