import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordModify = () => {
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <section className="h-fit pt-20">
      <h2 className="noto flex gap-4 bg-white p-4 text-label">
        <button type="button" onClick={handlePrev}>
          <img src="/assets/common/prev.svg" alt="" />
        </button>
        비밀번호 변경
      </h2>
      <section className="flex h-[350px] flex-col items-center gap-4 bg-white pt-16">
        df
      </section>
    </section>
  );
};

export default PasswordModify;
