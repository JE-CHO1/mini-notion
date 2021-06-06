import React from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './style.css';

export default function TextEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <>
      <h1>Editor</h1>
      <Editor editorState={editorState} onChange={setEditorState} />
    </>
  );
}
