import React, { useRef, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import FocusTrap from 'focus-trap-react';
import Hookshot from 'terra-hookshot';
import { hidePopupDomUpdates, showPopupDomUpdates } from './inertHelpers';
import styles from './PopupContent.module.scss';

const cx = classNamesBind.bind(styles);
/**
 * Rounded corner size to be used when calculating the arrow offset.
 */
const CORNER_SIZE = 3;

const propTypes = {
  /**
   * The children to be presented as the popup's content.
   */
  children: PropTypes.node.isRequired,
  /**
   * The height value in px, to be applied to the content container.
   */
  contentHeight: PropTypes.number.isRequired,
  /**
   * The width value in px, to be applied to the content container.
   */
  contentWidth: PropTypes.number.isRequired,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * The function that should be triggered when a resize is indicated.
   */
  onResize: PropTypes.func.isRequired,
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: PropTypes.element,
  /**
   * CSS classnames that are appended to the popup content body.
   */
  classNameInner: PropTypes.string,
  /**
   * The maximum height value in px, to be applied to the content container. Used with responsive behavior for actual height.
   */
  contentHeightMax: PropTypes.number,
  /**
   * The maximum width value in px, to be applied to the content container. Used with responsive behavior for actual width.
   */
  contentWidthMax: PropTypes.number,
  /**
   * Set this to `true` if your content has focusable elements and you want them to receive focus instead of focusing on the default popup frame when the popup is opened.
   */
  isFocusedDisabled: PropTypes.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
  /**
   * Whether or not the height provided is using a predefined value.
   */
  isHeightAutomatic: PropTypes.bool,
  /**
   * Whether or not the width provided is using a predefined value.
   */
  isWidthAutomatic: PropTypes.bool,
  /**
   * The function that should be triggered when a content resize is indicated.
   */
  onContentResize: PropTypes.func,
  /**
   * @private
   * Prop to set role on popup content container
   */
  popupContentRole: PropTypes.string,
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: PropTypes.string,
};

const defaultProps = {
  classNameInner: null,
  contentHeightMax: -1,
  contentWidthMax: -1,
  isFocusedDisabled: false,
  isHeaderDisabled: false,
  isHeightAutomatic: false,
  isWidthAutomatic: false,
  popupContentRole: 'dialog',
  rootSelector: '#root',
};

const PopupContent = (props) => {
  const {
    arrow,
    children,
    classNameInner,
    contentHeight,
    contentHeightMax,
    contentWidth,
    contentWidthMax,
    isFocusedDisabled,
    isHeaderDisabled,
    isHeightAutomatic,
    isWidthAutomatic,
    onRequestClose,
    onResize,
    onContentResize,
    popupContentRole,
    refCallback,
    rootSelector,
    ...customProps
  } = props;

  const ref = useRef(null);

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Value used to verify horizontal resize.
    setWindowWidth(window.innerWidth);
    // Store element that was last focused prior to popup opening
    const popupTrigger = document.activeElement;
    showPopupDomUpdates(ref.current, rootSelector);

    return () => {
      hidePopupDomUpdates(popupTrigger, rootSelector);
    };
  }, [ref, rootSelector]);

  const addPopupHeader = () => {
    const icon = <span className={cx('close-icon')} />;
    const header = (
      <div className={cx('header')}>
        <FormattedMessage id="Terra.popup.header.close">
          {text => <Button variant="utility" isIconOnly icon={icon} onClick={onRequestClose} text={text} />}
        </FormattedMessage>
      </div>
    );
    return <ContentContainer header={header} fill>{children}</ContentContainer>;
  };

  const isBounded = (value, maxValue) => value > 0 && maxValue > 0 && value >= maxValue;

  const cloneChildren = (isHeightBounded, isWidthBounded) => {
    const newProps = {};
    if (isHeightAutomatic) {
      newProps.isHeightBounded = isHeightBounded;
    }
    if (isWidthAutomatic) {
      newProps.isWidthBounded = isWidthBounded;
    }
    if (isHeightBounded && isWidthBounded && isHeaderDisabled) {
      newProps.closeButtonRequired = 'true';
    }
    return React.Children.map(children, child => React.cloneElement(child, newProps));
  };

  const getDimensionStyle = (value, maxValue, isAutomatic) => {
    if (value > 0) {
      if (maxValue > 0 && value >= maxValue) {
        return `${maxValue.toString()}px`;
      } if (!isAutomatic) {
        return `${value.toString()}px`;
      }
    }
    return null;
  };

  const getContentStyle = (height, maxHeight, width, maxWidth) => {
    const heightStyle = getDimensionStyle(height, maxHeight, isHeightAutomatic);
    const widthStyle = getDimensionStyle(width, maxWidth, isWidthAutomatic);
    const contentStyle = {};
    if (heightStyle) {
      contentStyle.height = heightStyle;
    }
    if (widthStyle) {
      contentStyle.width = widthStyle;
    }
    return contentStyle;
  };

  const handleOnResize = (event) => {
    if (props.onResize) {
      props.onResize(event, windowWidth);
    }
  };

  const contentStyle = getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax);
  const isHeightBounded = isBounded(contentHeight, contentHeightMax);
  const isWidthBounded = isBounded(contentWidth, contentWidthMax);
  const isFullScreen = isHeightBounded && isWidthBounded;

  let content = cloneChildren(isHeightBounded, isWidthBounded);
  if (isFullScreen && !isHeaderDisabled) {
    content = addPopupHeader();
  }
  const theme = React.useContext(ThemeContext);

  const contentClassNames = classNames(cx(
    'content',
    theme.className,
  ),
  customProps.className);

  const roundedCorners = arrow && !isFullScreen;
  const arrowContent = roundedCorners ? arrow : undefined;
  const innerClassNames = cx([
    'inner',
    { 'is-full-screen': isFullScreen },
    { 'rounded-corners': roundedCorners },
    classNameInner,
  ]);

  const heightData = isHeightAutomatic ? { 'data-terra-popup-automatic-height': true } : {};
  const widthData = isWidthAutomatic ? { 'data-terra-popup-automatic-width': true } : {};

  return (
    <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true, clickOutsideDeactivates: true }}>
      <div>
        <Hookshot.Content
          {...customProps}
          className={contentClassNames}
          tabIndex={isFocusedDisabled ? null : '0'}
          data-terra-popup-content
          onContentResize={(isHeightAutomatic || isWidthAutomatic) ? onContentResize : undefined}
          onEsc={onRequestClose}
          onResize={handleOnResize}
          refCallback={refCallback}
          role={popupContentRole || null}
        >
          {arrowContent}
          {/* eslint-disable-next-line react/forbid-dom-props */}
          <div
            {...heightData}
            {...widthData}
            data-terra-popup-begin
            className={innerClassNames}
            style={contentStyle}
            ref={ref}
          >
            <VisuallyHiddenText data-terra-popup-begin tabIndex="-1" text={content} />
            {content}
          </div>
        </Hookshot.Content>
      </div>
    </FocusTrap>
  );
};

PopupContent.propTypes = propTypes;
PopupContent.defaultProps = defaultProps;

export default PopupContent;

export {
  CORNER_SIZE as cornerSize,
};
