import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TabContext from './TabContext';
import TabTitle from './TabTitle';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  toolBar: PropTypes.element,
  actions: PropTypes.array,
};

const TabPage = ({
  actions,
  children,
  toolBar,
  ...customProps
}) => {
  const {fill, panelId, tabId, isSmall, title} = React.useContext(TabContext);
  const panelClassNames = cx([
    'panel',
    { fill },
  ]);

  return (
    <div className={cx('page')}>
      <ApplicationErrorBoundary>
        <div className={cx('page-header')}>
          <TabTitle action={actions}>{title}</TabTitle>
          {toolbar}
        </div>
        <div
          {...customProps}
          role={isSmall ? "none" : "tabpanel"}
          className={panelClassNames}
          tabIndex="0"
          id={panelId}
          aria-labelledby={tabId}
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
