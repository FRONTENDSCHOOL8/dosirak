import { Link } from 'react-router-dom';
import { ReactComponent as Reload } from '@/assets/home/reload.svg';

const RecipeBox = () => {
  return (
    <div className="absolute -bottom-[60px] left-1/2 grid h-[191px] w-[358px] -translate-x-1/2 grid-cols-2 rounded-2xl bg-white shadow-[0_1px_4px_2px_rgba(171,171,171,0.25)]">
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTNfMTU1%2FMDAxNjk5ODU2ODA4Njk3.AgUMA-edt2zvWDw5JCLIcHMbiu_LE89bnbWqTwhkGcEg.V9oxpl0zZ8Dnlz7VgcmX-njbv8G-aMIhUtzTab6BopIg.JPEG.tjdghks0714%2F4.JPG&type=sc960_832"
        alt=""
        className="mx-[22px] mt-[22px] size-[147px] rounded-2xl"
      />
      <div className="me-[22px] ms-2 mt-9 flex h-[133px] w-[147px] flex-col">
        <span className="font-Noto text-label text-primary-color">
          돈까스 도시락
        </span>
        <span className="font-noto paragraph-base text-gray700">
          돼지등심, 빵가루, 식용유, 밀가루, 계란, 허브솔트
        </span>
        <Link
          to="/"
          className="absolute -bottom-[4px] -right-[4px] mb-[22px] me-[22px] size-[18px]"
        >
          <Reload />
        </Link>
      </div>
    </div>
  );
};

export default RecipeBox;
