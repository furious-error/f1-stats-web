// ImageDialog.jsx
import React, { useState } from 'react';

const ImageDialog = ({ imageUrl, altText, style, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <img
        src={imageUrl}
        alt="Preview"
        className="object-cover rounded"
      />
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-50 rounded-xl text-white opacity-0 group-hover:opacity-85 transition-opacity"
      >
        View Full Image
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-auto p-4">
          <div className={`rounded shadow-lg relative w-full ${bgColor}`}>
            <button
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <img
              src={imageUrl}
              alt={altText}
              className={style}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDialog;
