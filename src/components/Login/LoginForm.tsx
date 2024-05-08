import { Button, Form, Input, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from '@umijs/max';
import './Login.scss';

// 子组件定义传参类型
export interface ChildComponentProps{
  changeForm : (value:number) => void
}


export default  function LoginForm(props:ChildComponentProps) {
    //国际化
    const intl = useIntl();

    // 登录按钮事件   values:所有表单数据 {"username": "admin","password": "ant.design"}
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    
    // 去注册
    const goToRegister=()=>{
      props.changeForm(1)
    }

    // 忘记密码
    const goToForget=()=>{
      props.changeForm(2)
    }



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
                  <FormattedMessage id="menu.login" defaultMessage="登录" />
                </Button>

                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
              </Form>
            </div>
            {/* 忘记密码 */}
            <div className="link-button-container">
              <a href="#" onClick={goToRegister}>
                <FormattedMessage id="menu.register" defaultMessage="注册"  />
              </a>
              <a className="login-form-forgot" href="#" onClick={goToForget}>
                <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
              </a>
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