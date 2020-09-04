import React from 'react';
import Panel from './Panel';

const Page2 = () => {
  return (
    <Panel
      toolBar={<p>Page 2 Toolbar</p>}
      actions={[<div>test action 2</div>]}
    >
      <p>content 2</p>
    </Panel>
  );
};

Page2.titleKey = "derp2";

export default Page2;