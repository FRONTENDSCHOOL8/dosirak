import ModifyThumbnail from '@/components/atom/mypage/ModifyThumbnail';
import { useLoginUserInfo } from '@/hook';
import { useState } from 'react';

const ProfileModifyForm = () => {
  const userInfo = useLoginUserInfo();

  const handleModifyProfile = (e) => {
    e.preventDefault();
    console.log(2);
  };

  return (
    <form onSubmit={handleModifyProfile}>
      <ModifyThumbnail />
      <section className="mt-4 flex flex-col gap-6 bg-white px-8 py-4">
        <div className="noto flex justify-between ">
          <label htmlFor="nickname" className="w-24 text-label">
            닉네임
          </label>
          <input
            type="text"
            value={userInfo.nickname}
            className="flex-grow border-b-2 border-b-gray400 outline-none focus:border-b-primary-color"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="noto w-60 rounded-lg bg-primary-color py-3 text-center text-white"
          >
            변경하기
          </button>
        </div>
      </section>
    </form>
  );
};

export default ProfileModifyForm;
