import React from 'react';

const Page1 = () => {
  <Panel
    toolBar={<p>Page 1 Toolbar</p>}
    titleActions={[<div>test action</div>]}
  >
    <p>content</p>
  </Panel>
};

Page1.titleKey = "derp";

export default Page1;