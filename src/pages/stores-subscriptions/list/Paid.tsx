import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Icon } from 'umi'








export default function Paid(){
    // swich num
    const [activeNum,setActiveNum] = useState(1);

    return (
        <Scoped>
            <div className="mc-layout">
                {/* 头部 */}
                <div className="mc-page-header">
                    {/* 回退 */}
                    <Button className="mc-page-header-back-btn">
                        <span className="mc-btn-icon">
                            <Icon icon="fluent:arrow-left-28-filled" />
                        </span>
                    </Button>
                    {/* 标题 */}
                    <div className="mc-page-header-title">
                        选择套餐
                    </div>



                </div>
                {/* 内容 */}
                <div className="mc-page-content">
                        {/* 提醒 */}
                        <div className="text-box">
                            {/* info-icon */}
                            
                            <div className="box">
                                店铺已无法使用，如果需要处理您的店内信息资产（如域名、账单等），请
                                {/* <Dropdown/> */}
                            </div>
                            <div className="box">
                                如果您不想再继续使用您的店铺，在处理完您的店内信息资产之后，可以选择
                                <span></span>
                            </div>
                        </div>
                        {/* 套餐 */}
                        <div className="introduction">
                            <div className="introduction-header">
                                <div>为店铺选择一个套餐</div>
                            </div>
                            <div className="introduction-body">
                                {/* swich */}
                                <div className="introductionPeriodContainer">
                                    <ul className="introduction-period">
                                        <li className={"introduction-period__item "+(
                                            activeNum==1 &&'active'
                                        )} onClick={()=>setActiveNum(1)}>
                                            月付
                                        </li>
                                        <li className={"introduction-period__item "+(
                                            activeNum==2 &&'active'
                                        )} onClick={()=>setActiveNum(2)}>
                                            年付（节省17%）
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Scoped>
    )


}


const Scoped =styled.div`
display: flex;
width: 100%;
justify-content: center;

.mc-layout{
    min-width:510px;
    max-width: 1440px;
    width:100%; 
    padding-left: 20px; 
    padding-right: 20px;

    .mc-page-header{
        display:flex;
        align-items: center;
        margin:24px 0;

        &-back-btn{
            width: 36px;
            height: 36px;
            background-color: transparent;
            margin-right:12px;
            &:hover{
                color: #4eafff;
                background-color:#ffffff;
            }

            .mc-btn-icon{
                position: absolute; left: 50%; top: 56%;
                transform: translate(-50%, -50%);
                font-size: 20px;
                color: #3b3b3b;
                transition: all 0.3s ease;

            }
        }

        &-title{
            color: #242833;
            font-size: 30px;
            font-size: 20px;
            font-weight: 600;
            line-height: 1.35;
            line-height: 28px;
            margin-bottom: 0;
        }
    }

    .mc-page-content{

        .text-box{
            display: none;
        }

        .introduction{
            display:flex;
            flex-direction: column;
            &-header{
                color: #00142d;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                font-family: 'Roboto';
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                padding: 12px 40px;
                background: -webkit-gradient(linear, left top, left bottom, from(#e8eff7), color-stop(100%, #fafcff), to(rgba(233, 240, 248, 0)));
                background: linear-gradient(180deg, #e8eff7 0%, #fafcff 100%, rgba(233, 240, 248, 0) 100%);
                line-height: 150%;
            }
            &-body{
                padding-right: 20px;
                padding-bottom: 20px;
                padding-left: 20px;
                background-color: white;
                .introductionPeriodContainer{
                    display: flex;
                    margin-top: 7px;
                    margin-bottom: 10px;
                }
                .introduction-period{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: inline-flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    margin: auto;
                    padding: 4px;
                    border-radius: 6px;
                    background-color: #eaedf1;
                    .introduction-period__item{
                        color: #474f5e;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 600;
                        cursor: pointer;
                        user-select: none;
                        padding: 8px 16px;
                        border-radius: 4px;
                        line-height: 22px;

                        &:hover{
                            background-color: #f0f7ff;
                            color: #356dff;

                        }
                        
                    }
                    .active{
                            background-color: #ffffff;
                            color: #356dff;
                    }

                }
            }
        }
    }

    
}


`