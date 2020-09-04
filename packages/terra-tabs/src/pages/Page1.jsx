import React from 'react';
import Panel from './Panel';

const Page1 = () => {
  return (
    <Panel
      toolBar={<p>Page 1 Toolbar</p>}
      actions={[<div>test action 1</div>]}
    >
      <p>content 1</p>
    </Panel>  
  );
};

Page1.titleKey = "derp";

export default Page1;