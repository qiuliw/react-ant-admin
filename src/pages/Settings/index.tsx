import LittleLayout from "@/components/Layout/LittleLayout";
import styled from "styled-components";




const settingArray = [
    {
        icon: 'icons/set.svg',
        title:  '基础设置',
        desc:   '设置并更新你的商店信息',
    },{
        
    }
]






export default function Settings(){

    return (
        <Scoped>
        <LittleLayout title="设置">
            <div className="settings-body" >
                <a className="settings-item" href="#" >
                    <div className="moduleItemIcon">
                        <img src="icons/set.svg"/>
                    </div>
                    <div className="moduleItemBody">
                        <p className="title">
                            基础设置
                        </p>
                        <div className="desc">
                            设置并更新你的商店信息
                        </div>
                    </div>
                </a>
            </div>
        </LittleLayout>
    </Scoped>
    )
}

const Scoped = styled.div`
.settings-body{
    display:flex;
    flex: wrap;
    gap: 20;
}
.settings{
    &-item{
        display: flex;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        align-items: flex-start;
        height: 100%;
        min-height: 104px;
        padding: 28px 24px;
        border-radius: 8px;
        background-color: #fff;
        &:hover{
            background-color:#f0f7ff;
            box-shadow: 0 0 32px rgba(0, 0, 0, 0.12);
        }
        .moduleItemIcon{
            width: 40px;
        }
        .moduleItemBody{
            margin-left: 24px;
            .title{
                margin-bottom: 6px;
                color: #242833;
                font-size: 16px;
                font-weight: 600;
                line-height: 22px;
            }
            .desc{
                color: #7a8499;
                font-size: 14px;
                font-weight: normal;
                line-height: 20px;
            }
        }
    }
}
`