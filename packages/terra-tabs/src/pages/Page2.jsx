import React from 'react';

const Page2 = () => {
  <Panel
    toolBar={<p>Page 2 Toolbar</p>}
    titleActions={[<div>test action</div>]}
  >
    <p>content</p>
  </Panel>
};

Page2.titleKey = "derp2";

export default Page2;