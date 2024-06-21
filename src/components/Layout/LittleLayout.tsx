import styled from "styled-components";

export default function LittleLayout({back,title,children}:{
    back?:boolean|false
    title:string
    children:any;
}){

    return (
        <Scoped>
            <div className="header">
                <span className="title">
                    {title}
                </span>    
            </div>
            <div className="body">
                {children}
            </div>
        </Scoped>
    )
}

const Scoped =  styled.div`
max-width:1220px;
margin:0 auto;
.header{
    color: #242833;
    font-size: 38px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.23;
    line-height: 32px;
    align-items: center;
    display: flex;
    margin: 24px 0;
}
.body{

}
`