import React from 'react';
import ReactModal from 'react-modal';

const Modal =  ({ open, setOpen, children }) => (
  <ReactModal
    portalClassName={`modal ${open ? 'modal--open' : ''} grid-container`}
    bodyOpenClassName="modal--open"
    overlayClassName="grid-container overlay"
    className="content"
    isOpen={open}
    shouldCloseOnEsc
    closeTimeoutMS={300}
    ariaHideApp={false}
    shouldCloseOnOverlayClick
    onRequestClose={() => setOpen(false)}
  >
    {children}
    <button className="modal__close" onClick={() => setOpen(false)}>
      <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7266 25.0312L20 17.7578L12.7266 10.4844" stroke="#FF3C63"/>
        <path d="M27.2734 10.4531L20 17.7266L27.2734 25" stroke="#FF3C63"/>
        <path d="M18.7805 34.5C8.65062 34.5 0.500006 26.8562 0.500007 17.5C0.500007 8.14382 8.65062 0.499999 18.7805 0.499999C23.8536 0.499999 29.5595 2.42092 33.9924 5.53478C38.4341 8.65481 41.5 12.8976 41.5 17.5C41.5 22.1024 38.4341 26.3452 33.9924 29.4652C29.5595 32.5791 23.8536 34.5 18.7805 34.5Z" stroke="#FF3C63"/>
      </svg>
    </button>
  </ReactModal>
);

export default Modal;
