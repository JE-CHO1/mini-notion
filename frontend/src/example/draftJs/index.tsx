import React from 'react';
import TextEditor from './TextEditor';
import HorizontalGap from '../../component/atom/HorizontalGap';
import WysiwygEditor from './WysiwygEditor';

const Index = () => (
  <div>
    <h1>Draft-js</h1>
    <TextEditor />
    <HorizontalGap />
    <WysiwygEditor />
  </div>
);

export default Index;
