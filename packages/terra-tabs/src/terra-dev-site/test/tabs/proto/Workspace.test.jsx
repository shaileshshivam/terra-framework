import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import Popup from 'terra-popup';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';
import List, { Item } from 'terra-list';
import classNames from 'classnames/bind';
import styles from './Workspace.module.scss';

const cx = classNames.bind(styles);

// const propTypes = {
//   activePageKey,
//   children: PropTypes.node,
// };

const Workspace = ({
}) => {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tabRef = useRef();
  const menuRef = useRef();

  const onClickTab = () => {
    setIsTabOpen(true);
  }

  const onClickMenu = () => {
    setIsMenuOpen(true);
  }

  const onRequestCloseTab = () => {
    setIsTabOpen(false);
  }

  const onRequestCloseMenu = () => {
    setIsMenuOpen(false);
  }

  const currentTab = 'Documentation';

  return (
    <div
      className={cx('space')} 
    >
      <div
        className={cx('header')} 
      >
        <div
          className={cx('menu')} 
        >
          <button onClick={onClickTab} ref={tabRef}><IconLeft /></button>
        </div>
        <div
          className={cx('end')} 
        >
          <button onClick={onClickMenu} ref={menuRef}><IconSettings /></button>
        </div>
        <div
          className={cx('fill')} 
        >
          <div
            className={cx('tab')} 
          >
            {currentTab}
          </div>
          <div
            className={cx('menu')} 
          >
            <button onClick={onClickTab} ref={tabRef}><IconCaretDown /></button>
          </div>
        </div>
        {/* <div
          className={cx('end')} 
        >
          <button onClick={onClickMenu} ref={menuRef}><IconSettings /></button>
        </div> */}
      </div>
      <div
        className={cx('header')}
        aria-hidden 
      >
        DOCUMENTATION
      </div>
      <div
        className={cx('toolbar')} 
      >
        <button>a</button>
        <button>b</button>
        <button>c</button>
        <button>d</button>
        <button>e</button>
      </div>
      <div
        className={cx('content')}
        tabIndex="0"
      >
        <Field label="Document Stuff">
          <Textarea
            size="large"
            id="doc-1"
            ariaLabel="Document Stuff"
          />
        </Field>
        <Field label="Document More Stuff">
          <Textarea
            size="large"
            id="doc-2"
            ariaLabel="Document More Stuff"
          />
        </Field>
        <Field label="Document Less Stuff">
          <Textarea
            size="large"
            id="doc-3"
            ariaLabel="Document Less Stuff"
          />
        </Field>
        <Field label="Document No Stuff">
          <Textarea
            size="large"
            id="doc-4"
            ariaLabel="Document No Stuff"
          />
        </Field>
      </div>
      <Popup
        isOpen={isTabOpen}
        targetRef={() => tabRef.current}
        onRequestClose={onRequestCloseTab}
        contentAttachment="top right"
        contentHeight="auto"
      >
        <List
          role="listbox"
          dividerStyle="standard"
          paddingStyle="standard"
        >
          <Item onSelect={onRequestCloseTab} isSelectable>Orders</Item>
          <Item onSelect={onRequestCloseTab} isSelectable>Chart</Item>
          <Item onSelect={onRequestCloseTab} isSelectable isSelected>Documentation</Item>
          <Item onSelect={onRequestCloseTab} isSelectable>Messages</Item>
        </List>
      </Popup>
      <Popup
        isOpen={isMenuOpen}
        targetRef={() => menuRef.current}
        onRequestClose={onRequestCloseMenu}
        contentAttachment="top right"
        contentHeight="auto"
      >
        <List
          role="listbox"
          dividerStyle="standard"
          paddingStyle="compact"
        >
          <Item onSelect={onRequestCloseMenu} isSelectable isSelected>Small</Item>
          <Item onSelect={onRequestCloseMenu} isSelectable>Medium</Item>
          <Item onSelect={onRequestCloseMenu} isSelectable>Large</Item>
        </List>
      </Popup>
    </div>
  );
};

// TabPage.propTypes = propTypes;

export default Workspace;
