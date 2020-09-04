import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import TabPage from './TabPage';
import Page1 from './Page1';
import Page2 from './Page2';

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string,
};

const TempImplement = ({
  id,
}) => {
  const [activePageKey, setActivePageKey] = useState('page-1');

  return (
    <Tabs
      id={id || 'test-id'}
      activePageKey={activePageKey}
      onRequestActivate={metaData => setActivePageKey(metaData.key)}
      // onCOnfig
    >
      <TabPage
        // possible persistent prop?
        tabKey={'page-1'}
        // label={IntlProvider.getString(MyTabPage.titleKey)}
        label="Page 1"
        metaData={{ key: 'page-2' }}
        render={() => {
          <Page1 />
        }}
      />
      <TabPage
        tabKey={'page-2'}
        // label={IntlProvider.getString(MyTabPage.titleKey)}
        label="Page 2"
        metaData={{ key: 'page-2' }}
        render={() => {
          <Page2 />
        }}
      />
    </Tabs>
  );
};

TempImplement.propTypes = propTypes;

export default TempImplement;
