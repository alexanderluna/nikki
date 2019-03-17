import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => (
  ReactDom.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={props.onDismiss}
      onKeyDown={props.onDismiss}
      role="presentation"
    >
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
        role="presentation"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal'),
  )
);

export default Modal;
