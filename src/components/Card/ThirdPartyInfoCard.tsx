import { QuestionCircleOutlined } from "@ant-design/icons";
import { Card, Tooltip } from "antd";
import styled from "styled-components";


export default function ThirdPartyInfoCard() {

    return (
        <Scoped>
            <Card title={<>
                绑定第三方商品
                <Tooltip title="这里是关于用户名的额外信息">
                    <span style={{ color: '#999', marginLeft: '4px', cursor: 'pointer' }}>
                        <QuestionCircleOutlined />
                    </span>
                </Tooltip>
            </>}>
                <div className="item">
                    
                </div>
            </Card>
        </Scoped>
    )


}



const Scoped = styled.div`
    

`