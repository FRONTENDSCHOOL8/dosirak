import useRegisterStore from '@/store/useRegisterStore';
import FormCheckBox from '../Form/FormCheckBox';
import SectionInfo from './SectionInfo';

export const TERM_LIST = [
  {
    name: 'service',
    children: '서비스 이용 약관 (필수)',
    required: true,
  },
  {
    name: 'personal-info',
    children: '개인정보 처리방침 (필수)',
    required: true,
  },
  {
    name: 'marketing',
    children: '마케팅 정보 수신 동의 (선택)',
    required: false,
  },
];

const TermSection = () => {
  const { checkValue, setCheckValue } = useRegisterStore((state) => state);

  const allCheckCurrent = TERM_LIST.length === checkValue.length;

  const handleCheckBox = (e) => {
    const target = e.target.name;

    if (checkValue.includes(target)) {
      setCheckValue(checkValue.filter((t) => t != target));
      return;
    }

    setCheckValue([...checkValue, target]);
  };

  const handleAllCheck = () => {
    const allCheckArray = TERM_LIST.map((item) => item.name);

    if (allCheckCurrent) {
      setCheckValue([]);
      return;
    }

    setCheckValue(allCheckArray);
  };

  return (
    <section className="step-2 mobile:w-screen mt-28 flex w-[430px] flex-col gap-6 px-9">
      <SectionInfo>
        <p>약관에 동의하시면</p> <p>회원가입이 완료됩니다.</p>
      </SectionInfo>
      <div className="flex items-center gap-3 rounded-lg p-5 shadow-[0_0_4px_2px_rgba(204,204,204,0.3)]">
        <FormCheckBox
          styleClass="checked:bg-circle-check bg-circle-uncheck"
          name="allCheck"
          labelStyle="text-[20px] font-bold text-primary-color"
          updater={handleAllCheck}
          checked={allCheckCurrent}
        >
          약관 전체 동의
        </FormCheckBox>
      </div>
      <div className="flex flex-col items-start gap-3 rounded-lg p-5">
        {TERM_LIST.map((item) => (
          <div
            key={item.name}
            className="relative flex w-full items-center gap-3"
          >
            <FormCheckBox
              checkImgSrc="@/assets/register/check.svg"
              unCheckImgSrc="@/assets/register/uncheck.svg"
              name={item.name}
              styleClass="checked:bg-check bg-uncheck [&:checked+label]:text-primary-color"
              labelStyle="text-paragraph-lg text-gray500"
              updater={handleCheckBox}
              checked={checkValue.includes(item.name)}
            >
              {item.children}
              <button
                type="button"
                className="noto absolute right-0 text-primary-color"
              >
                보기
              </button>
            </FormCheckBox>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermSection;
