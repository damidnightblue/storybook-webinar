// /* eslint-disable */
import React, { useState } from 'react';
// import classnames from 'classnames';
import style from './index.module.scss';
// import IconSearch from 'asset/images/svg/icon-search.svg';

export interface InputTextProps {
  /** 비활성화 */
  disabled: boolean;
  /** 입력값 */
  valueProps: string;
}

const InputText = ({ valueProps = '', disabled = false }: InputTextProps) => {
  const [inputValue, setInputValue] = useState(valueProps);
  const onChange = (e: any) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className={style.input_text}>
      <label htmlFor='input' className={style.input_text_label}>
        이름 :
      </label>
      <input
        type='text'
        id='input'
        className={style.input_text_elem}
        placeholder='이름을 입력하세요.'
        onChange={onChange}
        value={inputValue}
        disabled={disabled}
      />
    </div>
  );
};

export default InputText;
