import useRegisterStore from '@/store/useRegisterStore';
import FormInput from '../Form/FormInput';
import SectionInfo from './SectionInfo';

const NameSection = () => {
  const { nameValue, setNameValue } = useRegisterStore((state) => state);

  return (
    <section className="step-1 mobile:w-screen mt-28 flex w-[430px] flex-col gap-24 px-9">
      <SectionInfo>
        <p>이름을 알려주세요.</p>
      </SectionInfo>
      <FormInput
        category="name"
        value={nameValue}
        updater={setNameValue}
        autoComplete="off"
      >
        이름
      </FormInput>
    </section>
  );
};

export default NameSection;
