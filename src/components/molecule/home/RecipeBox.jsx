import { ReactComponent as Reload } from '@/assets/home/reload.svg';

const RecipeBox = () => {
  return (
    <div className="absolute -bottom-[60px] left-1/2 flex h-[187px] w-[358px] -translate-x-1/2 grid-cols-2 gap-5 rounded-2xl bg-white p-5 shadow-[0_1px_4px_2px_rgba(171,171,171,0.25)]">
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTNfMTU1%2FMDAxNjk5ODU2ODA4Njk3.AgUMA-edt2zvWDw5JCLIcHMbiu_LE89bnbWqTwhkGcEg.V9oxpl0zZ8Dnlz7VgcmX-njbv8G-aMIhUtzTab6BopIg.JPEG.tjdghks0714%2F4.JPG&type=sc960_832"
        alt=""
        className=" size-[147px] rounded-2xl"
      />
      <div className="mt-[14px] flex h-[133px] w-[147px] flex-col gap-3">
        <span className="noto text-label text-primary-color">
          돈까스 도시락
        </span>
        <p className="noto overflow-hidden text-ellipsis text-wrap text-paragraph-base text-gray700">
          돼지등심, 빵가루, 식용유, 밀가루, 계란, 허브솔트
        </p>
        <button
          type="button"
          className="absolute bottom-5 right-5 size-[18px]"
          aria-label="새로고침"
          onClick={() => {
            alert('아직 서비스 준비중이에요🥲');
          }}
        >
          <Reload />
        </button>
      </div>
    </div>
  );
};

export default RecipeBox;
