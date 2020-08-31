import React from 'react';
import ReactDOM from 'react-dom';
import TabContext from './TabContext';

const Tab = ({
  // possible persistent prop?
  fill, // private
  id, // private
  isSmall, // private
  tabKey,
  label,
  icon,
  isIconOnly,
  metaData,
  render,
  portalElement,
}) => {
  const tabContextValue = React.useMemo(() => (
    {
      tabId: id,
      panelId: `${id}-panel`,
      isSmall,
      fill,
      title: label
    }
  ), [id, isSmall, fill, label]);

  return (
    ReactDOM.createPortal((
      <TabContext.Provider value={tabContextValue}>
        {render()}
      </TabContext.Provider>
    ), portalElement)
  );
};

export default TabPage;
