import { Card, Checkbox } from "antd"
import styled from "styled-components"


export default function MultipleStylesCard() {
  return (
    <Scoped>
        <Card title='多款式'>
            <Checkbox value={'1'}>此商品有多个款式</Checkbox>
        </Card>
    </Scoped>
  )
}


const Scoped = styled.div`
    
`