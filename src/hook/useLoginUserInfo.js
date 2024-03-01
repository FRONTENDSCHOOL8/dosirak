import useCommonStore from '@/store/useCommonStore';
import { getPbImage } from '@/util';
import { useEffect } from 'react';

const useLoginUserInfo = (callbackFn) => {
  const { loginUser, setLoginUser } = useCommonStore((state) => state);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('pocketbase_auth'));
    if (!loginUser.nickname && auth?.model.nickname) {
      setLoginUser({
        id: auth.model.id,
        nickname: auth.model.nickname,
        thumbnail: auth.model.thumbnail
          ? getPbImage(auth.model)
          : `${window.location.origin}/src/assets/common/guest.svg`,
      });
    }

    callbackFn?.();
  }, []);
};

export default useLoginUserInfo;
