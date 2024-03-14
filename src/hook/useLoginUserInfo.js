import useUserPersistStore from '@/store/useUserPersistStore';
import useUserSessionStore from '@/store/useUserSessionStore';
import { useNavigate } from 'react-router-dom';

const useLoginUserInfo = () => {
  const { loginUser: sessionUser } = useUserSessionStore((state) => state);
  const { loginUser: rememberUser } = useUserPersistStore((state) => state);

  const userInfo = Object.keys(sessionUser).length ? sessionUser : rememberUser;

  return userInfo;
};

export default useLoginUserInfo;
