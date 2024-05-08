import { Footer, Question, SelectLang, AvatarDropdown, AvatarName } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
// import { errorConfig } from './requestErrorConfig';
// import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import React from 'react';
;
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
import { message, notification } from 'antd';

// 流程参考 https://www.bilibili.com/video/BV1yH4y1T7NW

// getInitialState 获取初始化状态
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  // fetchUserInfo    方法 从接口获取用户信息，没有则跳转登录页
  const fetchUserInfo = async () => {
    // 调用(mock中的)接口获取用户信息
    // try {
    //   const msg = await queryCurrentUser({
    //     skipErrorHandler: true,
    //   });
    //   return msg.data; // 返回用户信息
    // } catch (error) {
    //   history.push(loginPath);
    // }
    console.log('fetchUserInfo-ing')
    return {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        { key: '0', label: '很有想法的' },
        { key: '1', label: '专注设计' },
        { key: '2', label: '辣~' },
        { key: '3', label: '大长腿' },
        { key: '4', label: '川妹子' },
        { key: '5', label: '海纳百川' },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: { label: '浙江省', key: '330000' },
        city: { label: '杭州市', key: '330100' },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
    };
  };

  // 如果不是登录页面，执行
  const { location } = history;
  // 例如 访问/welcome
  if (location.pathname !== loginPath) {
    // currentUser 用户信息
    const currentUser = await fetchUserInfo(); // 调接口获取用户信息
    // history.push(loginPath);
    return {
      fetchUserInfo, // 方法
      currentUser, // { username: 'lizhi',age:18,avatar:"xxxx" }
      settings: defaultSettings as Partial<LayoutSettings>, // 右抽屉配置
    };
  }

  // 是登录页
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};


// 请求封装
export const request = {
  timeout: 60000, //超时处理，请求超过1分钟，取消请求
  // 错误统一处理
  errorConfig: {
    // 错误接收及处理
    errorHandler(){
      message.error("网络繁忙，请稍后再试");
    },
  },
  

  // 请求拦截器
  requestInterceptors: [
    (config:any) => {
      // 在请求拦截器中带token（除登录接口）
      const token = "xxxx";
      if(token && config.url != loginPath)
      config.headers['access_token']= token;
    return config;
    },
  ],
  // 响应拦截器
  responseInterceptors: [
    (response:any)=> response,
  ]
};
