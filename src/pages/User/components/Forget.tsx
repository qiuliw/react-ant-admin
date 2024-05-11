import { Button, Form, Input, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from '@umijs/max';
import './Login.scss';

// 子组件定义传参类型
export interface Props {
    changeForm: (value: number) => void
}


export default function LoginForm(props: Props) {
    //国际化
    const intl = useIntl();

    // 登录按钮事件   values:所有表单数据 {"username": "admin","password": "ant.design"}
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    // 去注册
    const goToRegister = () => {
        props.changeForm(1)
    }

    // 忘记密码
    const goToForget = () => {
        props.changeForm(2)
    }



    return (
        <>
            {/* 表头 */}
            <h3>
                <FormattedMessage id="forget.title" defaultMessage="忘记密码" />
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
                                message: intl.formatMessage({ id: 'pages.captcha.required', defaultMessage:'请输入验证码' }),
                            },
                        ]}

                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                            }}
                        >
                            <Input
                                style={{
                                    width: '50%',
                                    height: '51px',
                                    flex: 2,
                                    marginRight: '10px',
                                }}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder={intl.formatMessage({ id: 'pages.captcha.label', defaultMessage:'验证码' })}
                            />
                            <Button style={{
                                height: '51px',
                                flex: 1
                            }}
                            disabled={true}
                            
                            
                            >获取验证码</Button>
                        </div>

                    </Form.Item>
                    <Button
                        style={{
                            height: '46px',
                        }}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={true}
                    >
                        <FormattedMessage id="menu.captcha" defaultMessage="验证" />
                    </Button>
                    {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
                </Form>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'50px'}}>
                    <a href='#' onClick={()=>props.changeForm(0)}>去登录</a>
                </div>
            </div>
        </>
    )
}