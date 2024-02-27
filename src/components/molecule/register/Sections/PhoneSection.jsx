import SectionInfo from './SectionInfo';
import FormInput from './../FormInput/FormInput';
import useRegisterStore from '@/store/useRegisterStore';

const PhoneSection = () => {
  const {
    phoneValue,
    authValue,
    authTypeValue,
    setPhoneValue,
    setAuthValue,
    setAuthTypeValue,
    isPhoneAuthProcess,
    changePhoneAuthProcess,
    isCheckAuth,
    changeCheckAuth,
  } = useRegisterStore((state) => state);

  const sendAuthNumber = () => {
    if (isPhoneAuthProcess) return;
    changePhoneAuthProcess();

    const randomNumber = String(Math.floor(Math.random() * 1000000)).padStart(
      6,
      '0'
    );
    setAuthValue(randomNumber);
    console.log(`인증번호는 [${randomNumber}] 입니다. 정확히 입력해 주세요.`);
  };

  const confirmAuthNumber = () => {
    if (isCheckAuth === 1) return;
    if (parseInt(authValue) === parseInt(authTypeValue)) {
      changeCheckAuth(1);
    } else {
      changeCheckAuth(2);
    }
  };

  const updateAuthTypeValue = (e) => {
    if (isCheckAuth === 2) changeCheckAuth(0);
    setAuthTypeValue(e);
  };

  return (
    <section className="step-2 mobile:w-screen mt-40 flex w-[430px] flex-col gap-16 px-9">
      <SectionInfo>
        <p>휴대폰 번호를 알려주세요.</p>
      </SectionInfo>

      <FormInput
        category="phone"
        hasButton
        buttonType="requestAuth"
        value={phoneValue}
        updater={setPhoneValue}
        buttonEvent={sendAuthNumber}
        validation={!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(phoneValue)}
        warningText="'-'(하이픈)을 포함해 정확히 입력해 주세요."
        maxLength={13}
        disabled={isPhoneAuthProcess}
        autoComplete="off"
      >
        휴대폰 번호
      </FormInput>

      <FormInput
        category="auth"
        hasButton
        buttonType="auth"
        value={authTypeValue}
        updater={updateAuthTypeValue}
        buttonEvent={confirmAuthNumber}
        validation={!/^[0-9]{6}/.test(authTypeValue)}
        warningText={'숫자 6자리를 정확히 입력해 주세요.'}
        error={isCheckAuth === 2}
        errorText={'인증번호가 틀렸습니다.'}
        complete={isCheckAuth === 1}
        completeText={'인증되었습니다.'}
        maxLength={6}
        disabled={isCheckAuth === 1}
        autoComplete="off"
      >
        인증 번호
      </FormInput>
    </section>
  );
};

export default PhoneSection;
