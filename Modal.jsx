import React, { Children } from "react";
import "./modal.css";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) 
    return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
