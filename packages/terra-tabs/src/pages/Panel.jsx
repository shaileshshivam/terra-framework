import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  toolBar: PropTypes.element,
};

const TabPage = ({
  children,
  toolBar,
  ...customProps
}) => {
  const paneClassNames = cx([
    'pane',
    { fill },
  ]);

  // derive context here, { fill, panelid, tabid}

  return (
    <div className={cx('page')}>
      <ApplicationErrorBoundary>
        <div className={cx('page-header')}>
          {toolbar}
        </div>
        <div
          {...customProps}
          role="tabpanel" // prop to remove role, or set none
          className={paneClassNames}
          tabIndex="0"
          id={id}
          aria-labelledby={associatedTabId}
          aria-expanded="true"
        >
          {render()}
        </div>
      </ApplicationErrorBoundary>
    </div>
  );
};

TabPage.propTypes = propTypes;

export default TabPage;
