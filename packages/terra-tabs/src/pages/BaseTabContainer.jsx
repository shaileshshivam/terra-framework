import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  actions: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.node,
  toolBar: PropTypes.element,
};

const TabPage = ({
  actions,
  children,
  toolBar,
  ...customProps
}) => {

  return (
    <div>
      <div className="header">
        {insertToolbar}
      </div>
      <div className="scroll" tabIndex="0">
        {children}
      </div>
    </div>
  );
};

TabPage.propTypes = propTypes;

export default TabPage;