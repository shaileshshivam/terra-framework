import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import uuidv4 from 'uuid/v4';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { KEY_TAB } from 'keycode-js';

import PagePortalContext from '../page-container/PagePortalContext';
import { ApplicationIntlContext } from '../application-intl';
import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import { useNotificationBanners } from '../application-notification/NotificationBannerProvider';
import BannerRegistrationContext from '../application-notification/private/BannerRegistrationContext';

import PageHeader from './_PageHeader';

import styles from './ApplicationPage.module.scss';

const cx = classNames.bind(styles);

const ApplicationPage = ({
  title, actions, toolbar, onRequestClose, children,
}) => {
  const pagePortalContext = React.useContext(PagePortalContext);
  const pageIdRef = React.useRef(uuidv4());
  const nodeManager = pagePortalContext?.nodeManager;
  const contextValue = React.useMemo(() => ({
    ancestorPage: pageIdRef.current,
    ancestorTitle: title,
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
      <div>
        <div className="header">
          {toolbar}
        </div>
        <div className={cx('content')}>
          <ApplicationErrorBoundary>
              <div
                id="application-page-main"
                tabIndex="0"
                className={cx('overflow-content', 'page-background', { 'show-focus': showOverflowFocus })}
              >
                <div className={cx('width-normalizer')}>
                  {children}
                </div>
              </div>
          </ApplicationErrorBoundary>
        </div>
      </div>
    ), portalNode)
  );
};

export default ApplicationPage;
