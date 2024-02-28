import Notice from '@/components/atom/common/Notice';
import LoginButton from '@/components/atom/login/LoginButton';
import LoginInput from '@/components/molecule/login/LoginInput';
import FormCheckBox from '@/components/molecule/register/Form/FormCheckBox';
import useCommonStore from '@/store/useCommonStore';
import useLoginStore from '@/store/useLoginStore';
import { pb } from '@/util';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchLogin = async (data) => {
  pb.authStore.clear();
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  const result = await pb
    .collection('users')
    .authWithPassword(data.username, data.password);

  return result;
};

const LoginForm = () => {
  const {
    isLoginError,
    idValue,
    passwordValue,
    setIdValue,
    setPasswordValue,
    setIsLoginError,
    clearLoginState,
  } = useLoginStore((state) => state);
  const { setIsPending } = useCommonStore((state) => state);
  const navigate = useNavigate();
  const formRef = useRef(null);
  const rememberRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const loginData = {};
    for (let key of formData.keys()) {
      loginData[key] = formData.get(key);
    }

    setIsPending(true);
    fetchLogin(loginData)
      .then((data) => {
        console.log(data);
        if (rememberRef.current.checked) {
          localStorage.setItem('token', data.token);
        } else {
          sessionStorage.setItem('token', data.token);
        }
        navigate('/');
        clearLoginState();
        setTimeout(() => setIsPending(false), 1000);
      })
      .catch((error) => {
        setIsLoginError(true);
        setIsPending(false);
      });
  };

  useEffect(() => {
    if (isLoginError) {
      setIsLoginError(false);
    }
  }, [idValue, passwordValue]);

  return (
    <section className="w-full">
      <h2 className="sr-only">로그인 폼</h2>
      <form ref={formRef} onSubmit={handleLogin}>
        <div className="flex w-full flex-col gap-6">
          <LoginInput
            type="text"
            name="username"
            placeholder="아이디를 입력해 주세요"
            autoComplete="off"
            updater={setIdValue}
            value={idValue}
          >
            아이디
          </LoginInput>
          <LoginInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
            autoComplete="off"
            updater={setPasswordValue}
            value={passwordValue}
          >
            비밀번호
          </LoginInput>
        </div>
        <div className="relative mb-6">
          {isLoginError && (
            <Notice type="error">아이디나 비밀번호가 틀렸습니다.</Notice>
          )}
        </div>
        <div className="mt-4 flex items-center">
          <FormCheckBox
            styleClass="checked:bg-square-check bg-square-uncheck"
            labelStyle="text-paragraph-lg"
            name="rememberMe"
            ref={rememberRef}
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
