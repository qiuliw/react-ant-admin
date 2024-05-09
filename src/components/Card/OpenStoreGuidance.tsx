import React from 'react';
import type { CollapseProps, ProgressProps } from 'antd';
import { Button, Collapse, ConfigProvider, Progress, Space } from 'antd';
import styles from './OpenStoreGuidance..module.scss'
import { ShopTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import classNames from 'classnames';
// 渐变
const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
};

type Tab = {
    svg: React.ReactNode,
    name: string,
    title: string,
    desc: string,
    buttonText: string
    img: React.ReactNode
}
// 标签数据
const tabs: Tab[] = [
    {
        svg: <ShopTwoTone />,
        name: "添加商品1",
        title: "您已添加了新产品11111111",
        desc: "您还可以继续添加更多新产品",
        buttonText: "去添加",
        img: <img src="https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png" alt="antv" />
    },
    {
        svg: <ShopTwoTone />,
        name: "添加商品2",
        title: "您已添加了新产品2222222222",
        desc: "您还可以继续添加更多新产品",
        buttonText: "去添加",
        img: <img src="https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png" alt="antv" />
    },
    {
        svg: <ShopTwoTone />,
        name: "添加商品3",
        title: "您已添加了新产品333333333",
        desc: "您还可以继续添加更多新产品",
        buttonText: "去添加",
        img: <img src="https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png" alt="antv" />
    },
    {
        svg: <ShopTwoTone />,
        name: "添加商品4",
        title: "您已添加了新产品4444444",
        desc: "您还可以继续添加更多新产品",
        buttonText: "去添加",
        img: <img src="https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png" alt="antv" />
    },
    {
        svg: <ShopTwoTone />,
        name: "添加商品1",
        title: "您已添加了新产品",
        desc: "您还可以继续添加更多新产品",
        buttonText: "去添加",
        img: <img src="https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png" alt="antv" />
    },
]





const App: React.FC = () => {

    const [activeTab, setActiveTab] = useState(tabs[0]);


    //   头部
    const header = (
        <>
            {/* 标题 */}
            <h2 style={{
                fontWeight: 600
            }}>开店引导
            </h2>
            {/* 进度 */}
            <div style={{
                display: "flex",
                width: '100%',
                alignItems: 'center'
            }}>
                <div style={{
                    display: "inline-block",
                    marginRight: "16px",
                    color: " #474f5e",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "22px",
                }}
                >
                    已完成3/5个任务
                </div>
                {/* 条 */}
                <Progress
                    percent={50}
                    strokeColor={twoColors}
                    showInfo={false}
                    style={{
                        flex: 1,
                        margin: 0,
                    }}
                />
            </div>

        </>
    )
    // 丰容
    const content = (
        <>
            <div className={styles.wrapper}
                style={{
                    display: "flex",
                    width: "100%",
                    
                }}
            >
                {/* tab-space */}
                <Space.Compact direction='vertical'
                    style={{
                        width: 220
                    }}
                >
                    {
                        tabs.map((tab, index) => (
                            <div key={tab.name}
                                onClick={() => {
                                    setActiveTab(tabs[index])
                                }}
                                className={classNames(styles.tab, activeTab == tabs[index] ? styles.active : '')}
                            >
                                {tab.svg}
                                {tab.name}

                            </div>
                        ))
                    }
                </Space.Compact>
                {/* pane-space */}
                <div className={styles.pane}>
                  <div className={styles.content}>
                    <div className={styles.title}>
                        {activeTab.title}
                    </div>
                    <div className={styles.desc}>
                        {activeTab.desc}
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button>{activeTab.buttonText}</Button>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: header,
            children: content,
        },
    ];
    return (


        //组件主题
        <ConfigProvider
            theme={{
                components: {
                    Collapse: {
                        contentPadding: "0"
                    }
                }
            }}
        >
            {/* 折叠面板 */}
            <Collapse
                items={items} bordered={false}
                style={{
                    backgroundColor: "white",
                    overflow: "hidden"
                }}
                expandIconPosition="right"
                defaultActiveKey={['1']}
            />
        </ConfigProvider>
    )

}
export default App;