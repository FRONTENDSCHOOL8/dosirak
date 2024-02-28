import { ReactComponent as Naver } from '@/assets/login/naver.svg';
import { ReactComponent as Kakao } from '@/assets/login/kakao.svg';
import { ReactComponent as Insta } from '@/assets/login/insta.svg';

const SocialLogin = () => {
  return (
    <div className="mt-4 flex gap-3">
      <button>
        <Kakao />
      </button>
      <button>
        <Naver />
      </button>
      <button>
        <Insta />
      </button>
    </div>
  );
};

export default SocialLogin;
