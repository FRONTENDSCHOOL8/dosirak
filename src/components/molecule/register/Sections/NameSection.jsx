import useRegisterStore from '@/store/useRegisterStore';
import FormInput from '../FormInput/FormInput';
import SectionInfo from './SectionInfo';

const NameSection = ({ register }) => {
  const { nameValue, setNameValue } = useRegisterStore((state) => state);

  return (
    <section className="step-1 mobile:w-screen mt-40 flex w-[430px] flex-col gap-24 px-9">
      <SectionInfo>
        <p>이름을 알려주세요.</p>
      </SectionInfo>
      <FormInput category="name" value={nameValue} updater={setNameValue}>
        이름
      </FormInput>
    </section>
  );
};

export default NameSection;
