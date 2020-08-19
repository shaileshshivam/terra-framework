import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  toolBar: PropTypes.element,
  actions: PropTypes.arrayOf(PropTypes.element),
  render: PropTypes.func,
};

const TabPage = ({
  toolBar,
  actions,
  render,
  ...customProps
}) => {

  return (
    <div>
      <div className="header">
        {insertToolbar}
      </div>
      <div className="scroll" tabIndex="0">
        {render({  })}
      </div>
    </div>
  );
};

TabPage.propTypes = propTypes;

export default TabPage;


// const NavigationPage = ({
//   isActive, children, render, onRequestActivatePage, portalElement, preload,
// }) => {
//   const hasActivatedRef = React.useRef(isActive || preload);

//   const activeBreakpoint = React.useContext(ActiveBreakpointContext);

//   React.useEffect(() => {
//     if (isActive || preload) {
//       hasActivatedRef.current = true;
//     }
//   }, [isActive, preload]);

//   if (!isActive && !preload && !hasActivatedRef.current) {
//     return null;
//   }

//   let pageContent;

//   if (render) {
//     pageContent = render({ isActive });
//   } else {
//     pageContent = children;
//   }

//   const isCompact = flatLayoutBreakpoints.indexOf(activeBreakpoint) < 0;

//   return ReactDOM.createPortal((
//     <BasePageContainer>
//       {React.cloneElement(pageContent, { onRequestClose: isCompact ? () => { onRequestActivatePage(undefined); } : undefined })}
//     </BasePageContainer>
//   ), portalElement);
// };