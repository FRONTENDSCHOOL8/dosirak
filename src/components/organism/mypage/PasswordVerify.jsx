import FormInput from '@/components/molecule/register/Form/FormInput';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useState } from 'react';

const checkPassword = async (userId, password, handleVerify) => {
  const currentUserInfo = await pb.collection('users').getOne(userId);

  const authData = pb
    .collection('users')
    .authWithPassword(currentUserInfo.username, password);

  authData
    .catch((err) => {
      alert('비밀번호가 틀렸어요!');
      return;
    })
    .then((result) => {
      if (result.token) handleVerify(true);
    });
};

const PasswordVerify = ({ setVerified, password, setPassword }) => {
  const [isVisible, changeVisible] = useState(false);
  const userInfo = useLoginUserInfo();

  const handleVisible = () => {
    changeVisible((isVisible) => !isVisible);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    checkPassword(userInfo.id, password, setVerified);
  };

  return (
    <section className="noto flex h-[calc(100vh-270px)] flex-col items-center gap-4 bg-white pt-8">
      <form onSubmit={handleVerify} className="flex w-2/3 flex-col gap-16">
        <h3 className="text-label">
          <p>본인 확인을 위해</p>
          <p>비밀번호를 한번 더 입력해주세요.</p>
        </h3>
        <div className="flex flex-col">
          <FormInput
            category="password"
            hasButton
            buttonType="password"
            value={password}
            updater={handlePassword}
            buttonEvent={handleVisible}
            isPwVisible={isVisible}
          >
            비밀번호
          </FormInput>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary-color py-4 text-white"
        >
          비밀번호 확인
        </button>
      </form>
    </section>
  );
};

export default PasswordVerify;
