import SocialLogin from '@/components/molecule/login/SocialLogin';
import LoginAddon from '@/components/molecule/login/LoginAddon';

const EtcSection = () => {
  return (
    <section>
      <h2 className="sr-only">기타 로그인 기능 영역</h2>
      <div className="flex flex-col items-center">
        <span className="noto text-paragraph-base">
          SNS 계정으로 간편 로그인하기
        </span>
        <SocialLogin />
        <LoginAddon />
      </div>
    </section>
  );
};

export default EtcSection;
