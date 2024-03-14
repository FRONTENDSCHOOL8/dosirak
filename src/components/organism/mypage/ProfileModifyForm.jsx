import ModifyThumbnail from '@/components/atom/mypage/ModifyThumbnail';
import { useLoginUserInfo } from '@/hook';
import useUserPersistStore from '@/store/useUserPersistStore';
import useUserSessionStore from '@/store/useUserSessionStore';
import { getPbImage, pb } from '@/util';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchModify = async (userId, data) => {
  const result = await pb.collection('users').update(userId, data);

  return result;
};

const getNewThumbnail = async (userId) => {
  const userData = await pb.collection('users').getOne(userId);
  const newThumbnailURL = getPbImage(userData);

  return newThumbnailURL;
};

const ProfileModifyForm = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();
  const { setLoginUser: setSessionUser } = useUserSessionStore(
    (state) => state
  );
  const { setLoginUser: setRememberUser } = useUserPersistStore(
    (state) => state
  );
  const [nickName, setNickName] = useState(userInfo.nickname);
  const modifyForm = useRef(null);

  const handleModifyProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(modifyForm.current);
    const nextThumbnail = formData.get('thumbnail');
    const nextNickName = formData.get('nickname');

    // 썸네일 변경 없이 변경할 경우를 위해 새로 생성
    const nextProfileData = new FormData();
    if (nextThumbnail.size > 0) {
      nextProfileData.append('thumbnail', nextThumbnail);
    }

    nextProfileData.append('nickname', nextNickName);

    if (confirm('프로필을 변경하시겠어요?')) {
      await fetchModify(userInfo.id, nextProfileData);

      alert('변경이 완료되었어요!');

      if (userInfo.storage === 'session') {
        setSessionUser({
          ...userInfo,
          nickname: nextNickName,
          thumbnail: await getNewThumbnail(userInfo.id),
        });
      } else {
        setRememberUser({
          ...userInfo,
          nickname: nextNickName,
          thumbnail: await getNewThumbnail(userInfo.id),
        });
      }

      navigate(-1);
    }
  };

  const handleNickNameInput = (e) => {
    setNickName(e.target.value);
  };

  return (
    <form ref={modifyForm} onSubmit={handleModifyProfile}>
      <ModifyThumbnail />
      <section className="mt-4 flex flex-col gap-6 bg-white px-8 py-4">
        <div className="noto flex justify-between ">
          <label htmlFor="nickname" className="w-24 text-label">
            닉네임
          </label>
          <input
            onChange={handleNickNameInput}
            type="text"
            id="nickname"
            name="nickname"
            value={nickName}
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
