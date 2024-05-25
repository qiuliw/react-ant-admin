import { Card, Form, Input } from "antd";
import './ProductDataCard.scss'
import TinymceEditor from '../MCE/TinymceEditor'
const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
};

const {TextArea} = Input

export default function ProductDataCard() {
    return (
        <Card title="商品信息" className='product-data-card'>
            <Form layout='vertical' className='product-form'>
                <Form.Item label="商品标题"
                    rules={[
                        { validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('请输入商品标题')) },
                    ]}
                >
                    <Input placeholder="例如：冬季，毛衣" />
                </Form.Item>
                <Form.Item label='商品摘要'>
                    <TextArea showCount maxLength={400} onChange={onChange}
                        style={{
                            resize: 'none'
                        }}
                        placeholder='请用简短的文字描述本商品'
                    >
                    </TextArea>
                </Form.Item>
                <Form.Item label='商品描述'>
                    {/*  */}
                    <TinymceEditor/>
                </Form.Item>
            </Form>


        </Card>
    )
}