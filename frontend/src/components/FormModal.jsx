import React from 'react';
import TaskForm from './TaskForm';

function FormModal({ toggleModal, handleClose }) {
  console.log(toggleModal);
  if (!toggleModal) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-end z-50">
      <div className="bg-white w-full px-4 py-4">
        <TaskForm handleClose={handleClose} />
      </div>
    </div>
  );
}

export default FormModal;
