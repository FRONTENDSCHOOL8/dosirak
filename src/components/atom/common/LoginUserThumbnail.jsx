import { useLoginUserInfo } from '@/hook';
import useCommonStore from '@/store/useCommonStore';
import { memo } from 'react';

const LoginUserThumbnail = ({ thumbnailCaption }) => {
  const { loginUser } = useCommonStore((state) => state);
  useLoginUserInfo();

  return (
    <figure className="size-full">
      <img
        className="size-full select-none rounded-full border-[0.5px]"
        src={loginUser.thumbnail}
        alt=""
      />
      <figcaption className="sr-only">{thumbnailCaption}</figcaption>
    </figure>
  );
};

export default memo(LoginUserThumbnail);
