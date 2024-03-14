import { ReactComponent as Pen } from '@/assets/common/modify-profile.svg';
import { useLoginUserInfo } from '@/hook';

const MyFeedProfile = () => {
  const userInfo = useLoginUserInfo();
  return (
    <div className="flex gap-[54px]">
      <div className="">
        <figure className="relative w-[73px]">
          <img
            src={userInfo.thumbnail}
            alt=""
            className="size-[73px] rounded-full border-2"
          />
          <figcaption className="absolute -bottom-1 right-0">
            <button>
              <Pen />
            </button>
          </figcaption>
        </figure>
        <span className="paragraph-lg h-[24px] w-[300px] text-nowrap">
          {userInfo.nickname}
        </span>
      </div>
      <div className=" ms-[20px] mt-[22px] flex space-x-6">
        <p className="noto flex flex-col items-center text-label text-paragraph-base text-gray700">
          <strong>8</strong>
          <span className="w-10 text-center">게시글</span>
        </p>
        <p className="noto flex flex-col items-center text-label text-paragraph-base text-gray700">
          <strong>48</strong>
          <span className="w-10 text-center">팔로워</span>
        </p>
        <p className="noto flex flex-col items-center text-label text-paragraph-base text-gray700">
          <strong>52</strong>
          <span className="w-10 text-center">팔로잉</span>
        </p>
      </div>
    </div>
  );
};

export default MyFeedProfile;
