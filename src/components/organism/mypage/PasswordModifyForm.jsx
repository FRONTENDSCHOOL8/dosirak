import ModifyPasswordArea from '@/components/molecule/mypage/ModifyPasswordArea';
import { pb } from '@/util';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchModifyPassword = async (
  currentPassword,
  newPassword,
  newPasswordConfirm
) => {
  const result = await pb.collection('users').update(pb.authStore.model?.id, {
    oldPassword: currentPassword,
    password: newPassword,
    passwordConfirm: newPasswordConfirm,
  });

  return result;
};

const PasswordModifyForm = ({ currentPassword }) => {
  const navigate = useNavigate();
  const modifyPasswordRef = useRef(null);

  const handleModifyPassword = async (e) => {
    e.preventDefault();

    const formData = new FormData(modifyPasswordRef.current);

    if (confirm('비밀번호를 변경하시겠어요?')) {
      await fetchModifyPassword(
        currentPassword,
        formData.get('password'),
        formData.get('passwordConfirm')
      );

      alert('변경이 완료되었어요!');
      navigate('/mypage', { replace: true });
    }
  };
  return (
    <section className="noto flex h-[calc(100vh-270px)] flex-col items-center gap-4 bg-white pt-8">
      <form
        ref={modifyPasswordRef}
        onSubmit={handleModifyPassword}
        className="flex w-2/3 flex-col gap-16"
      >
        <h3 className="text-label">
          <p>변경할 비밀번호를 입력해주세요.</p>
        </h3>
        <ModifyPasswordArea />
        <button
          type="submit"
          className="rounded-lg bg-primary-color py-4 text-white"
        >
          비밀번호 변경
        </button>
      </form>
    </section>
  );
};

export default PasswordModifyForm;
