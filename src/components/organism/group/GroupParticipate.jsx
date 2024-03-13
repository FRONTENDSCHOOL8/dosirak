import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useState, useEffect, useRef } from 'react';

const GroupParticipate = ({ groupId }) => {
  const userInfo = useLoginUserInfo();
  const userId = userInfo.id;

  const [groupData, setGroupData] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const dialogRef = useRef(null);

  const baseButtonClass = 'w-full rounded-3xl py-2 text-label';

  // 참여하고 있지 않은 모임에만 모달 띄워주기
  useEffect(() => {
    const fetchGroupData = async () => {
      const data = await pb.collection('groups').getOne(groupId);
      setGroupData(data);

      if (!data.participant.includes(userId)) {
        setShowDialog(true);
        dialogRef.current?.showModal();
      }
    };

    fetchGroupData();
  }, [groupId, userId]);

  // 모달 닫기
  useEffect(() => {
    if (!showDialog && dialogRef.current) {
      dialogRef.current.close();
    }
  }, [showDialog]);

  const closePopup = () => {
    setShowDialog(false);
  };

  const joinGroup = async (groupId, userId) => {
    await updateGroupParticipant(groupId, userId);
    alert('환영합니다! 모임에 가입되었습니다.');
    setShowDialog(false);
  };

  const updateGroupParticipant = async (groupId, userId) => {
    const updatedParticipants = [...groupData.participant, userId];
    const updateData = {
      participant: updatedParticipants,
    };
    await pb.collection('groups').update(groupId, updateData);
    setGroupData({ ...groupData, participant: updatedParticipants }); // 로컬 상태 업데이트
  };

  return (
    <section className="absolute bottom-0 left-0">
      <h3 className="sr-only">모임 참여하기</h3>
      {showDialog && (
        <dialog
          ref={dialogRef}
          className="absolute top-0 z-10 h-[138px] w-[410px] rounded-xl bg-primary-color px-9 pb-6 pt-6"
        >
          <p className="font-Gong-Gothic-l text-heading-sm text-gray50">
            모임이 마음에 드시나요?
          </p>
          <div className="noto mt-[18px] flex justify-between gap-4">
            <button
              className={`${baseButtonClass} bg-gray600 text-white`}
              onClick={closePopup}
            >
              좀 더 볼래요
            </button>
            <button
              className={`${baseButtonClass} bg-tertiary-color text-primary-color`}
              onClick={() => joinGroup(groupId, userId)}
            >
              참여할래요
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default GroupParticipate;
