import React, {
  useEffect, useRef, useState,
} from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor, EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// 예제 주소: https://codesandbox.io/s/vbv5y?file=/src/index.tsx:0-2805
// examples in https://github.com/jpuri/react-draft-wysiwyg/tree/master/stories
// function uploadImageCallBack(file: File) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://api.imgur.com/3/image');
//     xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
//     const data = new FormData();
//     data.append('image', file);
//     xhr.send(data);
//     xhr.addEventListener('load', () => {
//       const response = JSON.parse(xhr.responseText);
//       resolve(response);
//     });
//     xhr.addEventListener('error', () => {
//       const error = JSON.parse(xhr.responseText);
//       reject(error);
//     });
//   });
// }

const WysiwygEditor = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(ContentState.createFromText('입력해주세요.')),
    // EditorState.createEmpty(),
  );
  const [editMode, setEditMode] = useState(true);
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editMode && editorRef?.current) {
      editorRef.current.focusEditor();
    }
  }, []);

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const toggleEditMode = () => {
    // 현재값 기준으로 반대여야 함
    setEditMode((v) => !v);
  };

  return (
    <div className="editor">
      <button onClick={toggleEditMode}>
        현재는
        {editMode ? ' 수정모드 ' : ' 읽기모드 '}
        입니다.
      </button>
      <Editor
        ref={editorRef}
        readOnly={!editMode}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        // toolbarHidden={true}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          // image: {
          //   uploadCallback: uploadImageCallBack,
          //   alt: { present: true, mandatory: true },
          // },
        }}
      />
    </div>
  );
};
const App = () => (
  <div>
    <h2>Wysiwyg Editor</h2>
    <WysiwygEditor />
  </div>
);

export default App;
