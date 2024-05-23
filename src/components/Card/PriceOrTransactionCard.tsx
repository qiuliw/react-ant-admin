import { Card, Col, Form, InputNumber, Row } from "antd"
import styled from "styled-components"


export default function PriceOrTransactionCard() {
    return (
        <Scoped>
            <Card title='价格/交易' className="card">
                <Form layout="vertical">
                    <Row>
                        <Col span={12}>
                            <Form.Item label="价格" name='price' className="price">
                                
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Scoped>
    )
}

const Scoped = styled.div`
    .ant-card-head-title{
        font-weight: 400;
    }
    .price{
        font-weight: 600;
    }

`