import SectionInfo from './SectionInfo';
import FormInput from '../FormInput/FormInput';

const LoginInfoSection = () => {
  return (
    <section className="step-2 mobile:w-screen mt-40 flex w-[430px] flex-col gap-8 px-9">
      <SectionInfo>
        <p>사용할 아이디와</p> <p>비밀번호를 알려주세요.</p>
      </SectionInfo>
      <FormInput category="id" hasButton buttonType="duplicate">
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
