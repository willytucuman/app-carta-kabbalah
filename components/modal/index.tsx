import React from 'react';

interface ModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onConfirm, onCancel, title }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-300"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sí
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
