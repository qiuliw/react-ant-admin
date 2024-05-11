import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import { FormattedMessage, history, useIntl, useModel, SelectLang, Outlet } from '@umijs/max';
import './index.scss';
import langShow from '@/locales/langShow';
import API from '@/services/user';
import { useState } from 'react';
// import LoginForm from '@/components/Login/LoginForm';
import RegisterForm from '@/pages/User/components/Register';
import ForgetForm from '@/pages/User/components/Forget';
import ILang from '@/components/Lang/Lang';
const useStyles = createStyles(({ token }) => {
  return {
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
  };
});

// 国际化组件
const Lang = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.lang} data-lang>
      {SelectLang && <SelectLang reload={false} postLocalesData={()=>{return[  
            {  
                "lang": "zh-CN",  
                "label": "简体中文",  
                "icon": "🇨🇳", // 中国国旗  
                "title": "语言"  
            },  
            {  
              "lang": "zh-TW",  
              "label": "繁體中文",  
              "icon": "tw", 
              "title": "語言"  
            },
            {  
                "lang": "en-US",  
                "label": "English",  
                "icon": "🇺🇸", // 美国国旗  
                "title": "Language"  
            },  
            {  
              "lang": "ja-JP",  
              "label": "日本語",  
              "icon": "🇯🇵", // 日本国旗  
              "title": "言語"  
            },  
            {  
                "lang": "es-ES",  
                "label": "Español",  
                "icon": "🇪🇸", // 西班牙国旗  
                "title": "Idioma"  
            },  
            {  
                "lang": "fr-FR",  
                "label": "Français",  
                "icon": "🇫🇷", // 法国国旗  
                "title": "Langue"  
            },  
            {  
                "lang": "de-DE",  
                "label": "Deutsch",  
                "icon": "🇩🇪", // 德国国旗  
                "title": "Sprache"  
            },  

            {  
                "lang": "ko-KR",  
                "label": "한국어",  
                "icon": "🇰🇷", // 韩国国旗  
                "title": "언어"  
            },  
            {  
                "lang": "ru-RU",  
                "label": "Русский",  
                "icon": "🇷🇺", // 俄罗斯国旗  
                "title": "Язык"  
            },  
            {  
                "lang": "ar-SA",  
                "label": "العربية",  
                "icon": "🇸🇦", // 沙特阿拉伯国旗（作为阿拉伯语的代表）  
                "title": "لغة"  
            },  
            {  
                "lang": "pt-BR",  
                "label": "Português",  
                "icon": "🇧🇷", // 巴西国旗（作为葡萄牙语的代表）  
                "title": "Idioma"  
            }  
          ]}
       }
      />}
    </div>
  );
};



const Login: React.FC = () => {

  const intl = useIntl();
  const lang = langShow[intl.locale as keyof typeof langShow];
  // 动态组件
  // 0: 登录、1: 注册、2: 忘记密码
  const [formIndex,setFormIndex] = useState(0) ;
  const changeForm = (value:number) => setFormIndex(value)




  return (
    <div
      className="login-wrap"
      style={{
        display: 'flex',
        width: '100vw',
        minWidth: '1200px',
        height: '100vh',
      }}
    >
      {/* logo */}
      <div
        className="login-logo"
        style={{
          position: 'relative',
          width: '67.5%',
        }}
      >
        <div className="logo-container">
          <p>{intl.formatMessage({ id: 'pages.login.welcome' })}</p>
          <img
            src="/icons/login-text.svg"
            style={{
              objectFit: 'contain',
              height: '30%',
            }}
          />
        </div>
      </div>
      <div
        className="login-form-scroll"
        style={{
          flex: '1',
          minWidth: '400px',
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <div
          className="login-form-container"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#fff',
          }}
        >
              <ILang />
          <div
            className="login-form-wrap"
            style={{
              paddingTop: '30px',
            }}
          >
            <>
              <Outlet/>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
