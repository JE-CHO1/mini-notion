import React, { useCallback, useMemo, useState } from 'react';
import {
  createEditor, Editor, Transforms, Node, Descendant,
} from 'slate';

import {
  Slate, Editable, withReact, ReactEditor,
} from 'slate-react';

// @ts-ignore
const CodeElement = (props) => (
  <pre {...props.attributes}>
    <code>{props.children}</code>
  </pre>
);

// @ts-ignore
const DefaultElement = (props) => <p {...props.attributes}>{props.children}</p>;

const CodeElements = () => {
  const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
    case 'code':
      return <CodeElement {...props} />;
    default:
      return <DefaultElement {...props} />;
    }
  }, []);

  return (
  // @ts-ignore
  // eslint-disable-next-line no-shadow
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (event.key === '`' && event.ctrlKey) {
            event.preventDefault();
            // Determine whether any of the currently selected blocks are code blocks.
            // 타입에러 뜸
            // const [match] = Editor.nodes(editor, {
            //   match: (n) => n.type === 'code',
            // });

            // 토글로 하려다가 말음.
            Transforms.setNodes(
              editor,
              // @ts-ignore
              { type: 'code' },
              { match: (n) => Editor.isBlock(editor, n) },
            );
          } else if (event.key === '`') {
            event.preventDefault();
            Transforms.setNodes(
              editor,
              // @ts-ignore
              { type: 'paragraph' },
              { match: (n) => Editor.isBlock(editor, n) },
            );
          }
        }}
      />
    </Slate>
  );
};

export default CodeElements;
