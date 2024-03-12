import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordModifyForm from '@/components/organism/mypage/PasswordModifyForm';
import PasswordVerify from '@/components/organism/mypage/PasswordVerify';

const PasswordModify = () => {
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <section className="h-[calc(100vh-95px)] bg-white pt-20">
      <header className="noto flex gap-4 bg-white p-4 text-label">
        <button type="button" onClick={handlePrev}>
          <img src="/assets/common/prev.svg" alt="" />
        </button>
        <h2>비밀번호 변경</h2>
      </header>
      {verified ? (
        <PasswordModifyForm />
      ) : (
        <PasswordVerify setVerified={setVerified} />
      )}
    </section>
  );
};

export default PasswordModify;
