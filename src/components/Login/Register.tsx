import { Button, Form, Input, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from '@umijs/max';

export default function Register() {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    const intl = useIntl();
    return (
        <>
            {/* 表头 */}
            <h3>
                <FormattedMessage id="register.title" defaultMessage="注册" />
            </h3>
            {/* 输入项 */}
            <div className="login-form-content">
                {/* 注册组件 */}
                <Form
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
                    <Button
                        style={{
                            height: '46px',
                        }}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        <FormattedMessage id="menu.register" defaultMessage="注册" />
                    </Button>
                </Form>
            </div>
        </>
    )
}
