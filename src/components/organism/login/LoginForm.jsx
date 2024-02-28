import LoginButton from '@/components/atom/login/LoginButton';
import LoginInput from '@/components/molecule/login/LoginInput';
import FormCheckBox from '@/components/molecule/register/Form/FormCheckBox';

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full">
      <h2 className="sr-only">로그인 폼</h2>
      <form onSubmit={handleLogin}>
        <div className="flex w-full flex-col gap-6">
          <LoginInput
            type="text"
            name="username"
            placeholder="아이디를 입력해 주세요"
            autoComplete="off"
          >
            아이디
          </LoginInput>
          <LoginInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
            autoComplete="off"
          >
            비밀번호
          </LoginInput>
        </div>

        <div className="mt-4 flex items-center">
          <FormCheckBox
            styleClass="checked:bg-square-check bg-square-uncheck"
            labelStyle="text-paragraph-lg"
            name="rememberMe"
          >
            로그인 유지
          </FormCheckBox>
        </div>
        <LoginButton />
      </form>
    </section>
  );
};

export default LoginForm;
