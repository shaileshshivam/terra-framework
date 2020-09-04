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
                <TabPage
          // possible persistent prop?
          tabKey="page-3"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 3"
          metaData={{ key: 'page-3' }}
          render={() => <Page1 />}
        />
        <TabPage
          tabKey="page-4"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 4"
          metaData={{ key: 'page-4' }}
          render={() => <Page2 />}
        />
                <TabPage
          // possible persistent prop?
          tabKey="page-5"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 5"
          metaData={{ key: 'page-5' }}
          render={() => <Page1 />}
        />
        <TabPage
          tabKey="page-6"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 6"
          metaData={{ key: 'page-6' }}
          render={() => <Page2 />}
        />
                <TabPage
          // possible persistent prop?
          tabKey="page-7"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 7"
          metaData={{ key: 'page-7' }}
          render={() => <Page1 />}
        />
        <TabPage
          tabKey="page-8"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 8"
          metaData={{ key: 'page-8' }}
          render={() => <Page2 />}
        />
                <TabPage
          // possible persistent prop?
          tabKey="page-9"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 9"
          metaData={{ key: 'page-9' }}
          render={() => <Page1 />}
        />
        <TabPage
          tabKey="page-10"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 10"
          metaData={{ key: 'page-10' }}
          render={() => <Page2 />}
        />
                <TabPage
          // possible persistent prop?
          tabKey="page-11"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 11"
          metaData={{ key: 'page-11' }}
          render={() => <Page1 />}
        />
        <TabPage
          tabKey="page-12"
          // label={IntlProvider.getString(MyTabPage.titleKey)}
          label="Page 12"
          metaData={{ key: 'page-12' }}
          render={() => <Page2 />}
        />
      </Tabs>
    </div>
  );
};

TempImplement.propTypes = propTypes;

export default TempImplement;
