import Notice from '@/components/atom/common/Notice';
import LoginButton from '@/components/atom/login/LoginButton';
import LoginInput from '@/components/molecule/login/LoginInput';
import FormCheckBox from '@/components/molecule/register/Form/FormCheckBox';
import useCommonStore from '@/store/useCommonStore';
import useUserPersistStore from '@/store/useUserPersistStore';
import useUserSessionStore from '@/store/useUserSessionStore';
import { getPbImage, pb } from '@/util';
import { THUMBNAIL_IMAGE_EXT } from '@/util/constant';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchLogin = async (data) => {
  pb.authStore.clear();
  const result = await pb
    .collection('users')
    .authWithPassword(data.username, data.password);

  return result;
};

const setThumbnail = (data) => {
  const thumbnailExt = data.record.thumbnail.split('.')?.pop();

  const userData = {
    collectionId: data.record.collectionId,
    id: data.record.id,
    thumbnail: data.record.thumbnail,
  };

  if (THUMBNAIL_IMAGE_EXT.includes(thumbnailExt.toLowerCase())) {
    return getPbImage(userData);
  } else {
    return `${window.location.origin}/assets/common/guest.svg`;
  }
};

const LOGIN_INFO = {
  idValue: '',
  passwordValue: '',
  isLoginError: false,
};

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState(LOGIN_INFO);
  const { setIsPending } = useCommonStore((state) => state);
  const { setLoginUser: setRememberUser } = useUserPersistStore(
    (state) => state
  );
  const { setLoginUser: setSessionUser } = useUserSessionStore(
    (state) => state
  );

  const navigate = useNavigate();
  const formRef = useRef(null);
  const rememberRef = useRef(null);

  const handleIdValue = (e) => {
    setLoginInfo({
      ...loginInfo,
      IdValue: e.target.value,
    });
  };

  const handlePasswordValue = (e) => {
    setLoginInfo({
      ...loginInfo,
      passwordValue: e.target.value,
    });
  };

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
        if (rememberRef.current.checked) {
          setRememberUser({
            id: data.record.id,
            nickname: data.record.nickname,
            thumbnail: setThumbnail(data),
            follow: data.record.follow,
          });
        } else {
          setSessionUser({
            id: data.record.id,
            nickname: data.record.nickname,
            thumbnail: setThumbnail(data),
            follow: data.record.follow,
          });
        }

        setTimeout(() => {
          navigate('/');
          setIsPending(false);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        setLoginInfo({ ...loginInfo, isLoginError: true });
        setIsPending(false);
      });
  };

  useEffect(() => {
    if (loginInfo.isLoginError) {
      setLoginInfo({
        ...loginInfo,
        isLoginError: false,
      });
    }
  }, [loginInfo.idValue, loginInfo.passwordValue]);

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
            updater={handleIdValue}
            value={loginInfo.idValue}
          >
            아이디
          </LoginInput>
          <LoginInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
            autoComplete="off"
            updater={handlePasswordValue}
            value={loginInfo.passwordValue}
          >
            비밀번호
          </LoginInput>
        </div>
        <div className="relative mb-6">
          {loginInfo.isLoginError && (
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
