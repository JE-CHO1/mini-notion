import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';

import {
  Slate, Editable, withReact, ReactEditor,
} from 'slate-react';

const DefaultEditor = () => {
  const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      // @ts-ignore
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable
        onKeyDown={(event) => {
          if (event.key === '&') {
            // 입력한 문자가 삽입되지 않도록
            event.preventDefault();
            // Execute the `insertText` method when the event occurs.
            editor.insertText('and');
          }
        }}
      />
    </Slate>
  );
};

export default DefaultEditor;
