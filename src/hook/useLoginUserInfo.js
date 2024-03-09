import useUserPersistStore from '@/store/useUserPersistStore';
import useUserSessionStore from '@/store/useUserSessionStore';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useLoginUserInfo = () => {
  const { loginUser: sessionUser } = useUserSessionStore((state) => state);
  const { loginUser: rememberUser } = useUserPersistStore((state) => state);
  const navigate = useNavigate();

  const userInfo = Object.keys(sessionUser).length ? sessionUser : rememberUser;

  useLayoutEffect(() => {
    if (!Object.keys(userInfo).length) {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  }, []);

  return userInfo;
};

export default useLoginUserInfo;
