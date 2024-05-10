import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './EmailPhone.module.scss';

const { Search } = Input;

const EmailOrPhoneInput: React.FC = () => {
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className={styles.wrapper}>
      <Input className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={styles.placeholderBlur}>
        手机号/邮箱
      </div>
    </div>
  );
};

export default EmailOrPhoneInput;
