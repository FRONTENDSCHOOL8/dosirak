import { useLoginUserInfo } from '@/hook';

const MyFeedProfile = () => {
  const userInfo = useLoginUserInfo();
  return (
    <div className="flex justify-between gap-6 px-12 py-4">
      <div className="pb-12">
        <figure className="relative flex w-20 flex-col items-center">
          <img
            src={userInfo.thumbnail}
            alt=""
            className="size-[73px] rounded-full border-[1px]"
          />
          <figcaption className="absolute -bottom-9 left-0">
            <span className="noto text-nowrap text-label font-semibold">
              {userInfo.nickname}
            </span>
          </figcaption>
        </figure>
      </div>
      <div className="noto flex gap-8 p-4">
        <p className="flex flex-col items-center text-paragraph-lg">
          <strong>8</strong>
          <span className="text-center text-gray700">게시글</span>
        </p>
        <p className="flex flex-col items-center text-paragraph-lg">
          <strong>48</strong>
          <span className="text-center text-gray700">팔로워</span>
        </p>
        <p className="flex flex-col items-center text-paragraph-lg">
          <strong>52</strong>
          <span className="text-center text-gray700">팔로잉</span>
        </p>
      </div>
    </div>
  );
};

export default MyFeedProfile;
