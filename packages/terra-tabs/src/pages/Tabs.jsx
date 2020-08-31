import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CollapsibleTabs from './_CollapsibleTabs';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  activePageKey,
  children: PropTypes.node,
};

const TabPageContainer = ({
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

  const tabData = React.Children.map(child => {
    return {
      id: `${id}-${child.props.pageKey}`,
      title: child.props.title,
      icon: child.props.icon,
      count: child.props.count,
      isSelected: child.props.pageKey == activePageKey,
      onSelect: onTabSelect,
      metaData: { key: child.props.pageKey },
    };
  });

  const tabsClassNames = cx([
    'tabs',
    { 'tab-fill': tabFill },
    { 'body-fill': fill },
    'structural',
    customProps.className,
  ]);
  
  return (
    <div
      {...customProps}
      className={tabsClassNames} 
      role="none"
    >
      <div className={cx('header')}>
        <CollapsibleTabs tabData={tabData} />
      </div>
      <div className={cx('body')} ref={workspaceRef}>
        {isInitialized && React.Children.map(children, child => {
          let portalElement = workspacePortalsRef.current[child.props.pageKey]?.element;
          if (!portalElement) {
            portalElement = document.createElement('div');
            portalElement.style.position = 'relative';
            portalElement.style.height = '100%';
            portalElement.style.width = '100%';
            portalElement.id = `${props.id}-${child.props.tabKey}`;
            workspacePortalsRef.current[child.props.tabKey] = {
              element: portalElement,
            };
          }

          return (
            React.cloneElement(child, {
              id: `${id}-${child.props.pageKey}`,
              isActive: child.props.tabKey === activePageKey, portalElement,
              fill,
            })
          );
        })}
      </div>
    </div>
  );
};

TabPageContainer.propTypes = propTypes;

export default TabPageContainer;
