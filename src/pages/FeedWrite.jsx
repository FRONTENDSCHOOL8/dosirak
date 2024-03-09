import TinyMceEditor from '@/components/atom/common/TinyMceEditor';
import FeedWriteHeader from '@/components/molecule/feed/FeedWriteHeader';
import ImageUpload from '@/components/molecule/feed/ImageUpload';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchFeedText = async (data) => {
  const result = await pb.collection('feed').create(data);

  return result;
};

export const Component = () => {
  const [editorText, setEditorText] = useState('');
  const [imageList, setImageList] = useState([]);
  const [title, setTitle] = useState('');
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();
  const writeFormRef = useRef(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleUploadImage = (e) => {
    setImageList([...e.target.files]);
  };

  const handleFeedWrite = (e) => {
    e.preventDefault();
    if (!confirm('글을 업로드 하시겠어요?')) return;
    const writeFormData = new FormData();
    writeFormData.append('title', title);
    writeFormData.append('writer', userInfo.id);
    writeFormData.append('maintext', editorText);

    imageList.forEach((image) => {
      writeFormData.append('images', image);
    });

    fetchFeedText(writeFormData);
    navigate('/feed/popular', { replace: true });
  };

  return (
    <>
      <section className="relative flex min-h-screen flex-col pt-20">
        <h2 className="sr-only">피드</h2>
        <form
          onSubmit={handleFeedWrite}
          ref={writeFormRef}
          className="h-full pb-8"
        >
          <FeedWriteHeader handleBack={handleBack} />
          <section className="flex h-full flex-col justify-between gap-8 p-2">
            <h3 className="sr-only">작성 영역</h3>
            <ImageUpload
              handleUploadImage={handleUploadImage}
              imageList={imageList}
              setImageList={setImageList}
            />
            <div className="flex flex-col gap-2 py-2">
              <label htmlFor="title" className="noto text-label">
                <strong className="text-red-600">*</strong>제목을 입력해주세요!
              </label>
              <input
                onChange={handleTitle}
                value={title}
                className="noto rounded-lg border-2 p-2 text-label outline-none focus:border-primary-color"
                id="title"
                name="title"
                type="text"
              />
            </div>
            <TinyMceEditor editorText={editorText} onEdit={setEditorText} />
          </section>
        </form>
      </section>
    </>
  );
};

Component.displayName = 'FeedWrite';
