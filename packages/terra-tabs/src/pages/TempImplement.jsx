import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TabPageContainer from './TabPageContainer';
import TabPage from './TabPage';
import Page1 from './Page1';
import Page2 from './Page2';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
};

const TempImplement = ({
  id,
  ...customProps
}) => {
  const [activePageKey, setActivePageKey] = useState('summary-1');

  return (
    <TabPageContainer
      activePageKey={activePageKey}
      onRequestActivatePage={(key) => { setActivePageKey(key); }}
    >
      <TabPage
        pageKey="summary-1"
        description="Derp"
        render={() => <Page1 />}
      />
      <TabPage
        pageKey="summary-2"
        description="Flerp"
        render={() => <Page2 />}
      />
    </TabPageContainer>
  );
};

TempImplement.propTypes = propTypes;

export default TempImplement;
