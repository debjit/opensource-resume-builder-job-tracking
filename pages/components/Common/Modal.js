import { useEffect, useRef } from 'react';
import ModalHeader from './Modal/ModalHeader';
import DetailEvent from '../Resume/FormInput/DetailEvent';

function Modal({ isOpen, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !modalRef.current ||
        modalRef.current.contains(event.target)
      ) {
        return;
      }
      onClose();
    };

    const handleKeyDown = (event) => {
      if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
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
      <div ref={modalRef} className="z-10 w-full max-w-7xl px-6 py-4 bg-white rounded-lg shadow-xl">
        <div className="mb-4">
          <ModalHeader>
            Add event
          </ModalHeader>
        </div>
        <div className="mb-6">
          <ModalBody>
          <DetailEvent
            name={"test"}
            label={"test"}
            value={"test"}
            // handleChange={submitForm}
          />

          </ModalBody>
        </div>
        <div className="flex justify-end">
          <ModalFooter onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

function ModalBody({ children }) {
  return (
    <div className="text-gray-600">{children}</div>
  );
}

function ModalFooter({ onClose }) {
  return (
    <div>
      <button
        className="px-4 py-2 mr-2 text-sm font-medium text-gray-500 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100"
        onClick={onClose}
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default Modal;
