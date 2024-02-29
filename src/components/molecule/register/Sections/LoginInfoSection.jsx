import SectionInfo from './SectionInfo';
import FormInput from '../Form/FormInput';
import useRegisterStore from '@/store/useRegisterStore';
import { pb } from '@/util';

const LoginInfoSection = () => {
  const {
    idValue,
    setIdValue,
    setCheckResult,
    isIdDuplicate,
    passwordValue,
    setPasswordValue,
    changeVisible,
    isPwVisible,
    isCfVisible,
    confirmValue,
    setConfirmValue,
  } = useRegisterStore((state) => state);

  return (
    <section className="step-2 mobile:w-screen mt-28 flex w-[430px] flex-col gap-6 px-9">
      <SectionInfo>
        <p>사용할 아이디와</p> <p>비밀번호를 알려주세요.</p>
      </SectionInfo>
      <FormInput
        category="username"
        hasButton
        buttonType="duplicate"
        value={idValue}
        updater={setIdValue}
        buttonEvent={checkDuplicate(idValue, setCheckResult)}
        validation={!/^[A-Za-z0-9]+$/.test(idValue)}
        warningText="영문자 혹은 숫자 조합으로 입력해 주세요."
        error={isIdDuplicate}
        errorText="이미 사용중인 아이디입니다."
        complete={isIdDuplicate === false}
        completeText="사용 가능한 아이디입니다."
        maxLength={30}
        readOnly={isIdDuplicate === false}
        autoComplete="off"
      >
        아이디
      </FormInput>
      <FormInput
        category="password"
        hasButton
        buttonType="password"
        value={passwordValue}
        updater={setPasswordValue}
        validation={
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordValue)
        }
        warningText="숫자와 영문자를 포함해 8글자 이상으로 입력해 주세요."
        buttonEvent={() => changeVisible('password')}
        isPwVisible={isPwVisible}
        complete={
          passwordValue === confirmValue &&
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordValue)
        }
        completeText="비밀번호가 일치합니다."
      >
        비밀번호
      </FormInput>
      <FormInput
        category="passwordConfirm"
        hasButton
        buttonType="password"
        value={confirmValue}
        updater={setConfirmValue}
        buttonEvent={() => changeVisible('confirm')}
        isCfVisible={isCfVisible}
        error={passwordValue !== confirmValue && confirmValue.length > 0}
        errorText="같은 비밀번호를 입력해주세요."
        complete={
          passwordValue === confirmValue &&
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordValue)
        }
        completeText="비밀번호가 일치합니다."
      >
        비밀번호 확인
      </FormInput>
    </section>
  );
};

const checkDuplicate = (idValue, setCheckResult) => async (e) => {
  const idData = await pb.collection('users').getList(1, 1, {
    filter: `username ?= "${idValue}"`,
  });

  if (idData.totalItems === 0) setCheckResult(false);
  if (idData.totalItems === 1) setCheckResult(true);
};

export default LoginInfoSection;
