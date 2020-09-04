import React from 'react';
import ReactDOM from 'react-dom';
import TabContext from './TabContext';

const TabPage = ({
  // possible persistent prop?
  id, // private
  label,
  // icon,
  // isIconOnly,
  // metaData,
  render,
  portalElement,
}) => {
  const tabContextValue = React.useMemo(() => (
    {
      tabId: id,
      panelId: `${id}-panel`,
      title: label
    }
  ), [id, label]);

  return (
    ReactDOM.createPortal((
      <TabContext.Provider value={tabContextValue}>
        {render()}
      </TabContext.Provider>
    ), portalElement)
  );
};

export default TabPage;
