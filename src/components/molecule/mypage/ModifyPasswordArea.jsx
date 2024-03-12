import FormInput from '@/components/molecule/register/Form/FormInput';
import { useState } from 'react';

const ModifyPasswordArea = () => {
  const [inputValue, setInputValue] = useState({
    password: '',
    confirm: '',
    passwordVisible: false,
    confirmVisible: false,
  });

  const handlePassword = (e) => {
    setInputValue({
      ...inputValue,
      password: e.target.value,
    });
  };

  const handlePasswordVisible = () => {
    setInputValue({
      ...inputValue,
      passwordVisible: !inputValue.passwordVisible,
    });
  };

  const handleConfirm = (e) => {
    setInputValue({
      ...inputValue,
      confirm: e.target.value,
    });
  };

  const handleConfirmVisible = () => {
    setInputValue({
      ...inputValue,
      confirmVisible: !inputValue.confirmVisible,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <FormInput
        category="password"
        hasButton
        buttonType="password"
        value={inputValue.password}
        updater={handlePassword}
        validation={
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputValue.password)
        }
        warningText="숫자와 영문자를 포함해 8글자 이상으로 입력해 주세요."
        buttonEvent={handlePasswordVisible}
        isPwVisible={inputValue.passwordVisible}
        complete={
          inputValue.password === inputValue.confirm &&
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputValue.password)
        }
        completeText="비밀번호가 일치합니다."
      >
        비밀번호
      </FormInput>
      <FormInput
        category="password"
        hasButton
        buttonType="password"
        value={inputValue.password}
        updater={handlePassword}
        validation={
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputValue.password)
        }
        warningText="숫자와 영문자를 포함해 8글자 이상으로 입력해 주세요."
        buttonEvent={handlePasswordVisible}
        isPwVisible={inputValue.passwordVisible}
        complete={
          inputValue.password === inputValue.confirm &&
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputValue.password)
        }
        completeText="비밀번호가 일치합니다."
      >
        새 비밀번호
      </FormInput>
      <FormInput
        category="passwordConfirm"
        hasButton
        buttonType="password"
        value={inputValue.confirm}
        updater={handleConfirm}
        buttonEvent={handleConfirmVisible}
        isCfVisible={inputValue.confirmVisible}
        error={
          inputValue.password !== inputValue.confirm &&
          inputValue.confirm.length > 0
        }
        errorText="같은 비밀번호를 입력해주세요."
        complete={
          inputValue.password === inputValue.confirm &&
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inputValue.password)
        }
        completeText="비밀번호가 일치합니다."
      >
        비밀번호 확인
      </FormInput>
    </div>
  );
};

export default ModifyPasswordArea;
