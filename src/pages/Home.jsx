import MainNavBar from '@/components/molecule/common/MainNavBar';
import { useLoginUserInfo } from '@/hook';
import useCommonStore from '@/store/useCommonStore';
import { useNavigate } from 'react-router-dom';

export const Component = () => {
  const { loginUser } = useCommonStore((state) => state);
  const navigate = useNavigate();

  useLoginUserInfo(() => {
    const auth = JSON.parse(localStorage.getItem('pocketbase_auth'));

    if (!loginUser.nickname && !auth?.model.nickname) {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  });

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <h2>홈</h2>
        <span>{loginUser.nickname}님 안녕하세요!</span>
        <img src={loginUser.thumbnail} alt="" />
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'Home';
