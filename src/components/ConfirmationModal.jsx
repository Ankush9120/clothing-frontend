import React from 'react';
import { MdClose } from 'react-icons/md';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[90%] max-w-md p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <MdClose className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-medium font-albert">{title}</h3>
            <p className="text-gray-600 font-albert">{message}</p>
          </div>
        </div>
        <div className="space-y-3">
          <button 
            onClick={onConfirm}
            className="w-full py-3 bg-red-600 text-white rounded-lg font-medium font-albert"
          >
            Yes, Delete
          </button>
          <button 
            onClick={onClose}
            className="w-full py-3 border border-gray-200 rounded-lg font-medium font-albert"
          >
            No, Keep It
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;