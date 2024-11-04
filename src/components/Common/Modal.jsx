import React from 'react';
import { Dialog } from '@headlessui/react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="bg-white dark:bg-gray-800 rounded max-w-lg mx-auto p-6 z-20">
          {children}
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-dark transition"
          >
            Close
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
