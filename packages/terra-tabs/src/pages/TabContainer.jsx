import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  activePageKey,
  children: PropTypes.node,
};

const TabPage = ({
  activePageKey,
  children,
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
    if (workspaceLastRef.current) {
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

  const onTabSelect = (event, metaData) => {
    setActivePageKey(metaData.key);
  };

  let activeTab;
  const tabData = React.Children.map(child => {
    if (child.props.pageKey == activePageKey) {
      activeTab = { title: child.props.title};
    }

    return {
      id: child.props.id,
      title: child.props.title,
      icon: child.props.icon,
      count: child.props.count,
      onSelect: onTabSelect,
      metaData: { key: child.props.pageKey },
    };
  });

  return (
    <div
      {...customProps}
      className={tabsClassNames} 
      role="none"
    >
      <div className={cx('header')}>
        <TabBar tabData={tabData} />
        <div className={cx('title')}>{activeTab.label}</div>
      </div>
      <div className={cx('body')} ref={workspaceRef}>
        {isInitialized && React.Children.map(children, child => {
          let portalElement = workspacePortalsRef.current[child.props.pageKey]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.style.position = 'relative';
            portalElement.style.height = '100%';
            portalElement.style.width = '100%';
            portalElement.id = `workspace-${child.props.pageKey}`;
            workspacePortalsRef.current[child.props.pageKey] = {
              element: portalElement,
            };
          }

          return (
            React.cloneElement(child, {
              isActive: child.props.pageKey === activePageKey, portalElement,
            })
          );
        })}
      </div>
    </div>
  );
};

TabPage.propTypes = propTypes;

export default TabPage;
