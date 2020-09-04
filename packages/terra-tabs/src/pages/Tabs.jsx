import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TabContainer from './_TabContainer';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  activePageKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onRequestActivate: PropTypes.func.isRequired,
};

const Tabs = ({
  id,
  activePageKey,
  children,
  onRequestActivate,
  ...customProps
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const workspacePortalsRef = useRef({});
  const workspaceLastKeyRef = useRef();
  const workspaceRef = useRef();

  React.useLayoutEffect(() => {
    const activeNode = workspacePortalsRef.current[activePageKey];
    if (!workspaceRef.current || workspaceRef.current.contains(activeNode?.element)) {
      return;
    }
    if (workspaceLastKeyRef.current) {
      workspaceRef.current.removeChild(workspacePortalsRef.current[workspaceLastKeyRef.current].element);
    }

    if (activeNode?.element) {
      workspaceRef.current.appendChild(activeNode.element);
      workspaceLastKeyRef.current = activePageKey;
    } else {
      workspaceLastKeyRef.current = undefined;
    }
  }, [activePageKey]);

  React.useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  const tabData = React.Children.map(child => {
    return {
      id: `${id}-${child.props.pageKey}`,
      title: child.props.title,
      icon: child.props.icon,
      count: child.props.count,
      isSelected: child.props.pageKey == activePageKey,
      onSelect: onRequestActivate,
      metaData: { key: child.props.pageKey },
    };
  });

  const tabsClassNames = cx([
    'tabs',
    { 'body-fill': true },
    customProps.className,
  ]);
  
  return (
    <div
      {...customProps}
      id={id}
      className={tabsClassNames} 
      role="none"
    >
      <div className={cx('header')}>
        <TabContainer tabData={tabData} />
      </div>
      <div className={cx('body')} ref={workspaceRef}>
        {isInitialized && React.Children.map(children, child => {
          let portalElement = workspacePortalsRef.current[child.props.pageKey]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.style.position = 'relative';
            portalElement.style.height = '100%';
            portalElement.style.width = '100%';
            portalElement.id = `${id}-${child.props.tabKey}`;
            workspacePortalsRef.current[child.props.tabKey] = {
              element: portalElement,
            };
          }

          return (
            React.cloneElement(child, {
              id: `${id}-${child.props.pageKey}`,
              isActive: child.props.tabKey === activePageKey, portalElement,
            })
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = propTypes;

export default Tabs;
