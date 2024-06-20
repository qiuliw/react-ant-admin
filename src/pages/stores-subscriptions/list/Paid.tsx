import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Icon } from 'umi'
import { wrap } from 'lodash';
import Charges from "@/components/Card/Charges";








export default function Paid(){
    // swich num
    const [activeNum,setActiveNum] = useState(1);
    // current active card ,default 2 
    const [hover,setHoverNum] = useState(2);
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
                                {/* Card */}
                                <div className="introduction-items ">
                                    <ul className={"introduction-packages "+(
                                            hover==1 && 'hover'
                                        )} 
                                        onMouseOver={()=>{
                                            setHoverNum(1);
                                            console.log('focus');
                                        }}
                                        onMouseLeave={()=>{
                                            setHoverNum(2);
                                            console.log('leave');
                                        }}
                                    >
                                        <li className="introduction-packages_item">
                                           <div className="introduction-packages_item-content">
                                                <div className="introduction-packages__item__section">
                                                    <div className="introduction-packages__item__title">
                                                        入门版
                                                    </div>
                                                    <div className="introduction-packages__item__introduction">
                                                        低成本体验建站 多重礼包助力业务启动
                                                    </div>
                                                    <div className="introduction-packages__item__charges">
                                                        <Charges/>
                                                    </div>
                                                </div>
                                           </div>
                                        </li>
                                    </ul>
                                    <ul className={"introduction-packages "+(
                                            hover==2 && 'hover'
                                        )} 
                                        onMouseOver={()=>{
                                            setHoverNum(2);
                                            console.log('focus');
                                        }}
                                    >
                                        <li className="introduction-packages_item">
                                            22222222222222222222222222222222222222
                                        </li>
                                    </ul>
                                    <ul className={"introduction-packages "+(
                                            hover==3 && 'hover'
                                        )} 
                                        onMouseOver={()=>{
                                            setHoverNum(3);
                                            console.log('focus');
                                        }}
                                        onMouseLeave={()=>{
                                            setHoverNum(2);
                                            console.log('leave');
                                        }}
                                    >
                                        <li className="introduction-packages_item">
                                            3333333333333333333333333333333333333333
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
ul {  
    list-style-type: none; /* 移除项目符号 */  
    padding: 0; /* 移除内边距 */  
    margin: 0; /* 移除外边距 */  
}  
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
                .introduction-items{
                    display:flex;
                    flex-wrap:wrap;
                    justify-content: center; 
                    gap:0 10px;
                    .introduction-packages{
                        flex:1 0 300px;
                        display: flex;
                        justify-content: center;
                        margin-top: 24px;
                        flex:1;
                        min-width:300px;
                        max-width: 500px;
                        position: relative;
                        top:0;
                        transition: all 0.3s ease;
                        &_item{
                            display: flex;
                            position: relative;
                            flex-direction: column;
                            align-items: center;
                            width: 100%;
                            /* padding: 12px 10px; */
                            overflow: hidden;
                            border-radius: 10px;
                            &::before{
                                content: '';
                                position: absolute;
                                z-index: 2;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                left: 0;
                                transition: border-color 0.3s;
                                border: 1px solid #d7dbe7;
                                border-radius: 10px;
                                pointer-events: none;
                            }
                            &:hover {
                                &::before{
                                    border-width: 2px;
                                    border-color: #356dff;
                                    box-shadow: 0 14px 50px rgba(0, 0, 0, 0.1);
                                }
                            }

                            &-content{
                                display: flex;
                                position: relative;
                                flex-direction: column;
                                align-items: center;
                                width: 100%;
                                padding: 30px 12px 0 12px;
                                overflow: hidden;
                                border-radius: 10px;
                                &::before{
                                    content: '';
                                    position: absolute;
                                    z-index: 1;
                                    top: 0;
                                    right: 0;
                                    left: 0;
                                    height: 10px;
                                    background: linear-gradient(304.01deg, #5699e7 20.15%, #5cb1ff 79.85%);
                                }
                                
                                .introduction-packages__item__section{
                                    display:flex;
                                    align-items: center;
                                    padding-bottom: 20px;
                                    flex-direction: column;
                                    .introduction-packages__item{
                                       &__title{
                                            margin-bottom: 16px;
                                            color: #458fe2;
                                            font-size: 30px;
                                            font-style: normal;
                                            font-weight: 600;
                                        }
                                        &__introduction{
                                            margin-bottom:16px;
                                            max-width: 100%;
                                            color: #474f5e;
                                            font-size: 16px;
                                            font-style: normal;
                                            font-weight: 600;
                                            line-height: 22px;
                                            text-align: center;
                                            word-wrap: break-word;
                                        }
                                        &__charges{
                                            display: flex;
                                            width:100%;
                                            align-items: flex-start;
                                            margin-bottom: 16px;
                                        }

                                    }

                                }


                            }
                        }

                    }
                    .hover{
                        top: -16px;
                        .introduction-packages_item{
                            &::before{
                                border-width: 2px;
                                border-color: #356dff;
                                box-shadow: 0 14px 50px rgba(0, 0, 0, 0.1);
                            }
                        }

                    } 
                }

            }


        }
    }
}

    



`