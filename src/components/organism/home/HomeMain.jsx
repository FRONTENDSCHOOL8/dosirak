import RecipeBox from '@/components/molecule/home/RecipeBox';
import { useLoginUserInfo } from '@/hook';

const HomeMain = () => {
  const userInfo = useLoginUserInfo();

  return (
    <main className="relative pt-20">
      <div className="flex h-[262px] w-full flex-col rounded-b-[40px] bg-primary-color">
        <label className="ms-9 mt-[41px] font-Noto text-paragraph-lg text-white">
          {userInfo.nickname}님 안녕하세요!
        </label>
        <strong className="ms-9 mt-2 font-Gong-Gothic-m text-heading-lg text-white">
          오늘은 이런 도시락 어때요?
        </strong>
      </div>
      <RecipeBox />
    </main>
  );
};

export default HomeMain;
