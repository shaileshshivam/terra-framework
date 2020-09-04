import React from 'react';
import Panel from './Panel';

const Page1 = () => {
  return (
    <Panel
      toolBar={<p>Page 1 Toolbar</p>}
      actions={[<div>test action</div>]}
    >
      <p>content</p>
    </Panel>  
  );
};

Page1.titleKey = "derp";

export default Page1;