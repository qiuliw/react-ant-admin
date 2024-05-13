import { Button, Form, Input, Divider, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl, Link } from '@umijs/max';
import './Login.scss';
import axios from 'axios';


/**
 * 手机验证码请求
 */
export function getVerificationCode(
    base_name: string,
    queue_type: string = 'reg',
    area_code: string = '86',
    service: string = 'xht',
    from: string = 'matacart'
) {
    return axios.get('https://api.handingyun.cn/y1/h-module-sendSmsCode.html')
};



export default function LoginForm() {

    //国际化
    const intl = useIntl();
    const [form] = Form.useForm();

    // 登录按钮事件   values:所有表单数据 {"username": "admin","password": "ant.design"}
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


    /**
 * 注册请求
 */
    const signUp = (values: any) => {
        return axios.post(
            '/api/h-module-URegister.html',
            values
        );
    }



    // 假设的手机号码正则表达式（仅用于示例，可能需要根据实际情况调整）  
    const phoneRegex = /^1[3-9]\d{9}$/;
    // 电子邮件地址的正则表达式  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    /**
     * 发送验证码
     */
    function sendVerificationCode() {
        getVerificationCode(form.getFieldValue('phone'))
            .then((request: any) => {
                if (request.data.status)
                    message.success('成功发送验证码！');
                else message.warning('用户存在');
            })
            .catch((error: any) => {
                message.error('发送失败!');
            });

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
                    form={form}
                    name="normal_login"
                    className="login-form"
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
                            }, {
                                validator(_, value) {
                                    if (!value || (phoneRegex.test(value) || emailRegex.test(value))) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error(intl.formatMessage({ id: 'pages.login.username.invalid' })));
                                },
                            }
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
                                message: intl.formatMessage({ id: 'pages.captcha.required', defaultMessage: '请输入验证码' }),
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
                                placeholder={intl.formatMessage({ id: 'pages.captcha.label', defaultMessage: '验证码' })}
                            />
                            <Button style={{
                                height: '51px',
                                flex: 1
                            }}
                                onClick={sendVerificationCode}


                            >获取验证码</Button>
                        </div>

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
                            prefix={<UserOutlined className="site-form-item-icon" />}
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
                        disabled={true}
                    >
                        <FormattedMessage id="menu.captcha" defaultMessage="验证" />
                    </Button>
                    {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
                </Form>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
                    <Link to='/user/signIn'>去登录</Link>

                </div>
            </div>
        </>
    )
}