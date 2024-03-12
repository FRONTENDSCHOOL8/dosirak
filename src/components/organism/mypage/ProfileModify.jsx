import { useNavigate } from 'react-router-dom';
import ProfileModifyForm from '@/components/organism/mypage/ProfileModifyForm';

const ProfileModify = () => {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <section className="h-fit pt-20">
      <h2 className="noto flex gap-4 bg-white p-4 text-label">
        <button type="button" onClick={handlePrev}>
          <img src="/assets/common/prev.svg" alt="" />
        </button>
        프로필 변경
      </h2>
      <ProfileModifyForm />
    </section>
  );
};

export default ProfileModify;
