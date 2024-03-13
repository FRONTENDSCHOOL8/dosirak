import { useLoginUserInfo } from '@/hook';
import useCommonStore from '@/store/useCommonStore';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Component = () => {
  const { isSplashPlay, setIsSplashPlay } = useCommonStore((state) => state);
  const navigate = useNavigate();
  const userInfo = useLoginUserInfo();

  useLayoutEffect(() => {
    if (userInfo.id) {
      setIsSplashPlay(true);
      navigate('/home', { replace: true });
    } else {
      setTimeout(() => {
        setIsSplashPlay(true);
      }, 2500);
    }
  }, []);

  useEffect(() => {
    if (isSplashPlay && !userInfo.id) {
      navigate('/login', { replace: true });
    }
  }, [isSplashPlay]);

  return (
    <>
      {!isSplashPlay && (
        <section className="flex max-h-screen min-h-screen items-center">
          <img src="/assets/common/splash.gif" alt="스플래쉬 이미지" />
        </section>
      )}
    </>
  );
};

Component.displayName = 'Splash';
