import SectionInfo from './SectionInfo';
import FormInput from '../FormInput/FormInput';
import useRegisterStore from '@/store/useRegisterStore';

const LoginInfoSection = () => {
  const { idValue, setIdValue } = useRegisterStore((state) => state);

  const checkDuplicate = () => {
    console.log('clicked!');
  };

  return (
    <section className="step-2 mobile:w-screen mt-40 flex w-[430px] flex-col gap-8 px-9">
      <SectionInfo>
        <p>사용할 아이디와</p> <p>비밀번호를 알려주세요.</p>
      </SectionInfo>
      <FormInput
        category="id"
        hasButton
        buttonType="duplicate"
        value={idValue}
        updater={setIdValue}
        buttonEvent={checkDuplicate}
        validation={!/^[A-Za-z0-9]+$/.test(idValue)}
        warningText="영문자와 숫자 조합으로 입력해 주세요."
        maxLength={30}
      >
        아이디
      </FormInput>
      <FormInput category="password" hasButton buttonType="password">
        비밀번호
      </FormInput>
      <FormInput category="confirm" hasButton buttonType="password">
        비밀번호 확인
      </FormInput>
    </section>
  );
};

export default LoginInfoSection;
