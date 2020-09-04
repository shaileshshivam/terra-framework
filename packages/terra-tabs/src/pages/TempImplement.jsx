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
  const [activeTabKey, setActiveTabKey] = useState('page-1');

  return (
    <div style={{ height: "500px", backgroundColor: "pink" }}>
      <Tabs
        id={id || 'test-id'}
        activeTabKey={activeTabKey}
        onRequestActivate={metaData => setActiveTabKey(metaData.key)}
        // onCOnfig
      >
        <TabPage
          // possible persistent prop?
          tabKey="page-1"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 1"
          metaData={{ key: 'page-1' }}
          render={() => <Page1 />}
        />
        <TabPage
          tabKey="page-2"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 2"
          metaData={{ key: 'page-2' }}
          render={() => <Page2 />}
        />
      </Tabs>
    </div>
  );
};

TempImplement.propTypes = propTypes;

export default TempImplement;
