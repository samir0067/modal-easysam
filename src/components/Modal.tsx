import React from "react";
import "./Modal.css";

interface ModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: () => void;
  content: JSX.Element;
}

/**
 * Modal components, to inform the user
 * @param {function} setIsOpen
 * @param {string} title
 * @param {boolean} isOpen
 * @param {JSX.Element} content
 */
export const Modal = ({ setIsOpen, title, isOpen, content }: ModalProps) => {
  return isOpen ? (
    <div className="backgroundModal">
      <div className="containerModal">
        <div className="titleModal">
          <h3>{title}</h3>
        </div>
        <div className="bodyModal">{content}</div>
        <div className="footerModal">
          <button onClick={setIsOpen}>Continue</button>
        </div>
      </div>
    </div>
  ) : null;
};
