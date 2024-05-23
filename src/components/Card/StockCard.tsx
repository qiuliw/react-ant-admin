import { Card, Col, Form, Row } from "antd"
import styled from "styled-components"

export default function StockCard() {
    return (
        <Scoped>
            <Card title='库存' className="stock-card">
                <Form>
                    <Row>
                        <Col span={10}>

                        </Col>
                        <Col span={2}>

                        </Col>
                        <Col span={10}>

                        </Col>
                    </Row>
                </Form>
            </Card>
        </Scoped>
    )
}


const Scoped = styled.div`
    .stock{
        &-card{

        }
    }
`