import LoginInfoSection from '@/components/molecule/register/Sections/LoginInfoSection';
import NameSection from '@/components/molecule/register/Sections/NameSection';
import PhoneSection from '@/components/molecule/register/Sections/PhoneSection';
import TermSection from '@/components/molecule/register/Sections/TermSection';
import ButtonSection from '@/components/molecule/register/Sections/ButtonSection';
import useRegisterStore from '@/store/useRegisterStore';
import { getPbImage, pb, randomNickName } from '@/util';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useCommonStore from '@/store/useCommonStore';
import useUserSessionStore from '@/store/useUserSessionStore';
import { THUMBNAIL_IMAGE_EXT } from '@/util/constant';

const fetchRegister = async (data) => {
  const result = await pb.collection('users').create(data);

  return result;
};

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

const RegisterForm = () => {
  const { clearRegisterState } = useRegisterStore((state) => state);
  const { setIsPending } = useCommonStore((state) => state);
  const { setLoginUser: setSessionUser } = useUserSessionStore(
    (state) => state
  );

  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const registerData = {};

    for (let key of formData.keys()) {
      registerData[key] = formData.get(key);
    }
    registerData['nickname'] = randomNickName();

    setIsPending(true);
    fetchRegister(registerData)
      .then(() => fetchLogin(registerData))
      .then((data) => {
        setTimeout(() => {
          setSessionUser({
            id: data.record.id,
            nickname: data.record.nickname,
            thumbnail: setThumbnail(data),
            follow: data.record.follow,
            storage: 'session',
          });

          navigate('/');
          clearRegisterState();
          setTimeout(() => setIsPending(false), 500);
        }, 1000);
      });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="register-form flex w-[1720px]">
        <NameSection />
        <PhoneSection />
        <LoginInfoSection />
        <TermSection />
      </div>
      <ButtonSection />
    </form>
  );
};

export default RegisterForm;
