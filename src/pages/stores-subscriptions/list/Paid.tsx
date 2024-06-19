import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import styled from "styled-components";
import { Icon } from '@umijs/max'








export default function Paid(){

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
                        {/* info-icon */}
                        <div className="text-box">
                            
                            <div className="box">
                                店铺已无法使用，如果需要处理您的店内信息资产（如域名、账单等），请
                                {/* <Dropdown/> */}
                            </div>
                            <div className="box">
                                如果您不想再继续使用您的店铺，在处理完您的店内信息资产之后，可以选择
                                <span></span>
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
                position: absolute; left: 50%; top: 50%;
                transform: translate(-50%, -50%);
                font-size: 22px;
                color: #3b3b3b
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
    }
    
}


`