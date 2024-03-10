import { Editor } from '@tinymce/tinymce-react';
import { useState, useCallback } from 'react';
import Spinner from './Spinner';
import { pb, getPbImage } from '@/util';

const TinyMceEditor = ({ editorText, onEdit }) => {
  const [loading, setLoading] = useState(true);
  const onEditorChange = useCallback((value) => onEdit(value));
  return (
    <section>
      <h2 className="sr-only">텍스트 에디터</h2>
      {loading && (
        <div className="absolute top-0 size-full">
          <Spinner
            textArray={[
              '햄버거 만드는중...',
              '레시피 생각하는중...',
              '재료 구매하는중...',
            ]}
          />
        </div>
      )}
      <Editor
        id="tinyEditor"
        apiKey="eimbnrx1ubv687o99lguydb160v5g2k1jysw6hphkupgzc8f"
        onInit={() => {
          setLoading(false);
        }}
        value={editorText}
        onEditorChange={onEditorChange}
        init={{
          height: 700,
          menubar: false,
          plugins: [
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'searchreplace',
            'fullscreen',
            'media',
            'table',
            'code',
            'help',
            'emoticons',
            'codesample',
            'quickbars',
          ],
          toolbar:
            'undo redo fullscreen | forecolor alignleft aligncenter ' +
            'alignright alignjustify | blocks | bold Italic Underline Strikethrough Superscript Subscript | bullist numlist outdent indent | ' +
            'lists table link charmap searchreplace | ' +
            'image media codesample emoticons preview | ' +
            'removeformat | help ',
          resize: false,
          branding: false,
          statusbar: false,
          images_upload_url: window.location.origin,
          images_upload_handler: (blobInfo) =>
            new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append('thumbnail', blobInfo.blob());

              pb.collection('feed_upload_images')
                .create(formData)
                .then((result) => {
                  resolve(getPbImage(result));
                });
            }),
        }}
      />
    </section>
  );
};

export default TinyMceEditor;
