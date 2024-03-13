import FeedCommonHeader from '@/components/molecule/feed/FeedCommonHeader';
import ImageUpload from '@/components/molecule/feed/ImageUpload';
import GroupCommonHeader from '@/components/molecule/group/GroupCommonHeader';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchAddGroup = async (data) => {
  const result = pb.collection('groups').create(data);

  return result;
};

export const Component = () => {
  const [imageList, setImageList] = useState([]);
  const [title, setTitle] = useState('');
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();
  const AddFormRef = useRef(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleUploadImage = (e) => {
    setImageList([...e.target.files]);
  };

  const handleFeedWrite = async (e) => {
    e.preventDefault();
    if (!confirm('모임을 생성하시겠어요?')) return;

    const formData = new FormData(AddFormRef.current);
    const addGroupFormData = {};

    addGroupFormData.thumbnail = formData.get('swiperImages');
    addGroupFormData.title = formData.get('groupTitle');
    addGroupFormData.hashTag = JSON.stringify({
      hashTag: formData.get('hashTag').split(','),
    });
    addGroupFormData.isRecruiting = true;

    await fetchAddGroup(addGroupFormData);

    alert('모임이 생성되었어요!\n모임 화면으로 돌아갈게요!');
    navigate('/group/recent', { replace: true });
  };

  return (
    <>
      <section className="relative flex min-h-screen flex-col px-8 pt-20">
        <h1 className="sr-only">모임 만들기</h1>
        <form
          onSubmit={handleFeedWrite}
          ref={AddFormRef}
          className="flex h-full flex-col py-8 pb-8"
        >
          <GroupCommonHeader handleBack={handleBack}>
            <span className="noto flex-grow text-center text-heading-sm font-semibold">
              모임 만들기
            </span>
            <button
              type="submit"
              className="noto absolute right-4 rounded-full bg-black px-3 py-[5px] text-paragraph-lg text-white"
            >
              만들기
            </button>
          </GroupCommonHeader>

          <ImageUpload
            handleUploadImage={handleUploadImage}
            imageList={imageList}
            setImageList={setImageList}
            multiple={false}
          >
            모임을 대표할 메인 이미지를 업로드해 주세요!
          </ImageUpload>

          <div className="noto mt-12 flex w-full flex-col">
            <label htmlFor="groupTitle" className="text-label">
              <strong className="text-red-600">*</strong> 모임의 이름을
              정해주세요!
            </label>
            <input
              type="text"
              id="groupTitle"
              name="groupTitle"
              className="border-b-2 p-2 outline-none focus:border-b-primary-color"
            />
          </div>

          <div className="noto mt-12 flex w-full flex-col">
            <label htmlFor="hashTag" className="text-label">
              <strong className="text-red-600">*</strong> 모임의 성격을 표현하는
              태그를 3개까지 작성해 주세요!( ','(콤마)로 구분 )
            </label>
            <input
              type="text"
              id="hashTag"
              name="hashTag"
              className="border-b-2 p-2 outline-none focus:border-b-primary-color"
            />
          </div>
        </form>
      </section>
    </>
  );
};

Component.displayName = 'GroupAdd';
