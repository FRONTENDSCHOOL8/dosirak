import { useLoginUserInfo } from '@/hook';
import useCommonStore from '@/store/useCommonStore';
import { memo } from 'react';

const LoginUserThumbnail = ({ thumbnailCaption }) => {
  const userInfo = useLoginUserInfo();

  return (
    <figure className="size-full">
      <img
        className="size-full select-none rounded-full border-[0.5px]"
        src={userInfo.thumbnail}
        alt=""
      />
      <figcaption className="sr-only">{thumbnailCaption}</figcaption>
    </figure>
  );
};

export default memo(LoginUserThumbnail);
