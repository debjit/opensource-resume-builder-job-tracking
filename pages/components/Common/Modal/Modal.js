import { useEffect, useRef, useState } from "react";

export default function Modal({ isOpen, setIsOpen, children }) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onClose = () => setIsOpen(false)

    const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }
      onClose();
    };

    const handleKeyDown = (event) => {
      if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 transition-opacity">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>
      </div>
      <div
        ref={modalRef}
        className="z-10 w-full max-w-7xl px-6 py-4 bg-white rounded-lg shadow-xl"
      >
      <div>
        {children}
      </div>
      </div>
    </div>
  );
}
