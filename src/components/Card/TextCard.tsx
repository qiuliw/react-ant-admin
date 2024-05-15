import { Card } from "antd";
import { ReactNode } from "react";
import { Flex, Button } from 'antd'
 
export type ButtonContent={
    text:string,
    url: string
}

export type CardContent = {
    title: string,
    contentText: ReactNode,
    buttonContents: ButtonContent[]
}
    

export default function TextCard(cardContent: CardContent): ReactNode {
    const { title, contentText, buttonContents } = cardContent;
    return (
        <>
            <Card title={title}>
                {contentText}
                <Flex gap="small" wrap style={{
                    marginTop:'20px'
                }}>
                    {
                        buttonContents.map((buttonContent,index)=>{
                            return(
                                <>
                                    <Button key={index} href={buttonContent.url}>{buttonContent.text}</Button>
                                </>
                            )
                        })
                    }
                </Flex>
            </Card>
        </>
    )
}