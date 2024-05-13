import { login } from '@/services/y2/api';
import { getFakeCaptcha } from '@/services/y2/login';
import { Alert, message, Tabs, Button, Form, Input, Divider,Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormattedMessage, Link, history, useIntl, useModel } from '@umijs/max';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import './Login.scss';





export default  function Login() {
    //国际化
    const intl = useIntl();
    // 假设的手机号码正则表达式（仅用于示例，可能需要根据实际情况调整）  
    const phoneRegex = /^1[3-9]\d{9}$/;  
    // 电子邮件地址的正则表达式  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
  
    const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
    const [type, setType] = useState<string>('account');
    const { initialState, setInitialState } = useModel('@@initialState');

    const fetchUserInfo = async () => {
      const userInfo = await initialState?.fetchUserInfo?.();
      if (userInfo) {
        flushSync(() => {
          setInitialState((s) => ({
            ...s,
            currentUser: userInfo,
          }));
        });
      }
    };


    const onFinish = async (values: API.LoginParams) => {
      try {
        // 登录
        const msg = await login({ ...values, type });
        if (msg.code === 0) {
          const token = msg.token;
          localStorage.setItem('token', token);
          const defaultLoginSuccessMessage = intl.formatMessage({
            id: 'pages.login.success',
            defaultMessage: '登录成功！',
          });
          message.success(defaultLoginSuccessMessage);
          await fetchUserInfo();
          const urlParams = new URL(window.location.href).searchParams;
          history.push(urlParams.get('redirect') || '/');
          return;
        }
        console.log(msg);
        // 如果失败去设置用户错误信息
        setUserLoginState(msg);
      } catch (error) {
        const defaultLoginFailureMessage = intl.formatMessage({
          id: 'pages.login.failure',
          defaultMessage: '登录失败，请重试！',
        });
        console.log(error);
        message.error(defaultLoginFailureMessage);
      }
    };    
    
    return (
        <>
            {/* 表头 */}
            <h3>
              <FormattedMessage id="login.title" defaultMessage="登录商店" />
            </h3>
            {/* 输入项 */}
            <div className="login-form-content">
              {/* 登录组件 */}
              <Form
                name="normal_login"
                className="login-form"
                // initialValues={{ remember: true }}
                layout="horizontal"
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({ id: 'pages.login.username.required' }),
                    },
                    // dev
                    // {
                    //   validator(_, value) {  
                    //     if (!value || (phoneRegex.test(value) || emailRegex.test(value))) {  
                    //       return Promise.resolve();  
                    //     }  
                    //     return Promise.reject(new Error(intl.formatMessage({ id: 'pages.login.username.invalid' })));  
                    //   },  
                    // }
                  ]}
                >
                  <Input
                    style={{
                      height: '52px',
                    }}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder={intl.formatMessage({ id: 'pages.login.username.label' })}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({ id: 'pages.login.password.required' }),
                    },
                  ]}
                >
                  <Input.Password
                    style={{
                      height: '52px',
                    }}
                    // visibilityToggle={true}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder={intl.formatMessage({ id: 'pages.login.password.label' })}
                  />
                </Form.Item>
                <Button
                  style={{
                    height: '46px',
                  }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  <FormattedMessage id="menu.login" defaultMessage="登录" />
                </Button>
                
              </Form>
            </div>
            {/* 忘记密码 */}
            <div className="link-button-container">
              <Link to='/user/signUp'>
                <FormattedMessage id="menu.register" defaultMessage="开始免费试用"  />
              </Link>
              <Link to='/user/forget' >
                <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
              </Link>
            </div>
            {/* 分割线 */}
            <Divider
              style={{
                marginTop: '80px',
                fontSize: '14px',
                lineHeight: '20px',
                textAlign: 'center',
                color: '#666',
                fontWeight: '500',
              }}
              orientationMargin="3em"
            >
              或
            </Divider>
            {/* 其他登录方式 */}
            <div
              className="external-login-button-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '60px',
              }}
            >
              <Button className="external-login-button" block>
                <img
                  src="/icons/google.svg"
                  style={{
                    objectFit: 'contain',
                    height: '62%',
                  }}
                />
                {intl.formatMessage({ id: 'pages.login.link.google' })}
              </Button>
              <Button className="external-login-button" block>
                <img src="/icons/facebook.svg" />
                {intl.formatMessage({ id: 'pages.login.link.facebook' })}
              </Button>
              <Button className="external-login-button" block>
                <img src="/icons/apple.svg" />
                {intl.formatMessage({ id: 'pages.login.link.apple' })}
              </Button>
              <Button className="external-login-button" block>
                <img src="/icons/linkie.svg" style={{ height: '100%',objectFit: 'contain' }} />
                {intl.formatMessage({ id: 'pages.login.link.linkie' })}
              </Button>
            </div>
        </>
    )
}