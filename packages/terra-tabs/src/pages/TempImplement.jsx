import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Tab from './Tab';
import Page1 from './Page1';
import Page2 from './Page2';

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
};

const MyTabPage = () => {
  <Panel
    toolBar
    titleActions={[]}
  >
    <p>content</p>
  </Panel>
};
MyTabPage.titleKey = "derp";

const TempImplement = ({
  id,
  ...customProps
}) => {
  const [activePageKey, setActivePageKey] = useState('summary-1');

  return (
    <Tabs
      id
      activePageKey={activePageKey}
      onRequestActivate={metaData => setActivePageKey(metaData.key)}
      // onCOnfig
    >
      <Tab
        // possible persistent prop?
        tabKey
        label={IntlProvider.getString(MyTabPage.titleKey)}
        icon
        isIconOnly
        metaData
        render={() => {
          <MyTabPage />
        }}
      />
    </Tabs>
  );
};

TempImplement.propTypes = propTypes;

export default TempImplement;
