import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import PagePortalContext from '../page-container/PagePortalContext';
import ApplicationErrorBoundary from '../application-error-boundary';

import styles from './ApplicationPage.module.scss';

const cx = classNames.bind(styles);

const Tab = ({
  // context provider for { panelId, tabId }
  // possible persistent prop?
  tabKey,
  label,
  icon,
  isIconOnly,
  metaData,
  render,
  portalElement,
}) => {
  const pagePortalContext = React.useContext(PagePortalContext);
  const pageIdRef = React.useRef(uuidv4());
  const nodeManager = pagePortalContext?.nodeManager;
  const contextValue = React.useMemo(() => ({
    nodeManager: pagePortalContext?.nodeManager,
  }), [title, pagePortalContext, goBack]);

  React.useLayoutEffect(() => () => {
    if (nodeManager) {
      nodeManager.releaseNode(pageIdRef.current);
    }
  }, [nodeManager]);

  let portalNode;
  if (nodeManager) {
    portalNode = nodeManager.getNode(pageIdRef.current, pagePortalContext.ancestorPage);
  }

  if (!nodeManager) {
    return null;
  }

  return (
    ReactDOM.createPortal((
      render()
    ), portalNode)
  );
};

export default TabPage;
