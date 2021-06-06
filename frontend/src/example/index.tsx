import React from 'react';
import DeaftIndex from './draftJs';
import SlateIndex from './slateJs';
import Login from './login/Login';

export default function Index() {
  return (
    <>
      <div><Login /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '50px' }}>
        <DeaftIndex />
        <SlateIndex />
      </div>
    </>
  );
}
