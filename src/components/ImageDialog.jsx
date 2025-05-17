// ImageDialog.jsx
import React, { useState } from 'react';

const ImageDialog = ({ imageUrl, altText }) => {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-4 rounded shadow-lg relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDialog;
