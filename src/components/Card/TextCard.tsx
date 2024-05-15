import { Card } from "antd";
import { ReactNode } from "react";
import { Flex, Button } from 'antd'
 
type buttonText={
    text:string,
    url: string
}

type CardContent = {
    title: string,
    content: string,
    buttonText: buttonText[]
}

export default function TextCard(): ReactNode {
    return (
        <>
            <Card title={title}>
                <p>{text}</p>
                <Flex gap="small" wrap style={{
                    marginTop:'30px'
                }}>
                    {buttons.map((button, index) => (
                        <Button key={index} href={button.url}>{button.text}</Button>
                    ))}
                </Flex>
            </Card>
        </>
    )
}