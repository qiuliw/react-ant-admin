import { Button, Form, Input, Divider,Checkbox ,message} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl,Link,history,useModel} from '@umijs/max';
import type { FormProps } from 'antd';
import './Register.scss'
import React, { useState } from 'react';
import { request } from '@umijs/max';
import { flushSync } from 'react-dom';
import { register } from '@/services/y2/api';

type FieldType = {
    username?: string;
    password?: string;
    agreement?: string;
};
interface Props{
    changeForm:(value:number)=>void
}




export default function Register(props:Props) {

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

    const intl = useIntl();
    return (
        <>
            {/* 表头 */}
            <h3>
                <FormattedMessage id="register.title" defaultMessage="开始您的免费试用" />
            </h3>
            {/* 输入项 */}
            <div className="register-form-content">
                {/* 注册组件 */}
                <Form
                    name="normal_register"
                    className="register-form"
                    layout="horizontal"
                    onFinish={
                        async (values: API.LoginParams) => {
                            try {
                              const msg = await register({ ...values });
                              if (msg.code === 0) {
                                const token = msg.token;
                                localStorage.setItem('token', token);
                                const defaultLoginSuccessMessage = intl.formatMessage({
                                  id: 'pages.login.success',
                                  defaultMessage: '注册成功！',
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
                                defaultMessage: '注册失败，请重试！',
                              });
                              console.log(error);
                              message.error(defaultLoginFailureMessage);
                            }
                        }
                    }
                    size="large"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: intl.formatMessage({ id: 'pages.login.username.required' }),
                            },
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
                            visibilityToggle={true}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder={intl.formatMessage({ id: 'pages.login.password.label' })}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password2"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: intl.formatMessage({ id: 'pages.login.password.required' }),
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(<FormattedMessage id="pages.register.password.not.match" defaultMessage='输入的密码不匹配'/>);
                                },
                            })
                        ]}
                    >
                        <Input.Password
                            style={{
                                height: '52px',
                            }}
                            visibilityToggle={true}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder={intl.formatMessage({ id: 'pages.register.password.again' })}
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                    >
                        <Checkbox>同意协议</Checkbox>
                    </Form.Item>
                    <Button
                        style={{
                            height: '46px',
                        }}
                        type="primary"
                        htmlType="submit"
                        className="register-form-button"
                    >
                        <FormattedMessage id="menu.register" defaultMessage="注册" />
                    </Button>
                </Form>
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
                通过其他方式注册
            </Divider>
            {/* 其他登录方式 */}
            <div
                className="external-register-button-container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginBottom: '60px',
                }}
            >
                <Button className="external-register-button" block>
                    <img
                        src="/icons/google.svg"
                        style={{
                            objectFit: 'contain',
                            height: '62%',
                        }}
                    />
                    {intl.formatMessage({ id: 'pages.register.link.google' })}
                </Button>
                <Button className="external-register-button" block>
                    <img src="/icons/facebook.svg" />
                    {intl.formatMessage({ id: 'pages.register.link.facebook' })}
                </Button>
                <Button className="external-register-button" block>
                    <img src="/icons/apple.svg" />
                    {intl.formatMessage({ id: 'pages.register.link.apple' })}
                </Button>
                <Button className="external-register-button" block>
                    <img src="/icons/linkie.svg" style={{ height: '100%', objectFit: 'contain' }} />
                    {intl.formatMessage({ id: 'pages.register.link.linkie' })}
                </Button>

                <div>已有账号，
                    <Link to="/user/signIn">去登录</Link>
                </div>
            </div>
        </>
    )
}
