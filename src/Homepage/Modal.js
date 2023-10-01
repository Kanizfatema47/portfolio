import React from "react";

function Modal({ isModalOpen, closeModal, title, content }) {



  return (
    <div className={`${!!isModalOpen ? ' inset-0 flex justify-center items-center bg-black bg-opacity-50': 'hidden'} `}>
      <div className="bg-white text-rose-900 p-4 rounded-md">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2">{content}</p>
        <p className="mt-2">{content}</p>
        <p className="mt-2">{content}</p>
        <p className="mt-2">{content}</p>
        

        <div className="mt-4 flex justify-end">
          <button onClick={closeModal} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">Close</button>
          <button className="px-4 py-2 bg-rose-900 text-white rounded-md">Action</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
