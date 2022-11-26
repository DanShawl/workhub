import React from 'react';
import TaskForm from './TaskForm';

function FormModal({ toggleModal, handleClose, currentItem, setCurrentItem }) {
  if (!toggleModal) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-end z-50 md:items-center">
      <div className="bg-white w-full px-4 py-4 md:h-auto md:w-96 md:rounded-sm">
        <TaskForm
          handleClose={handleClose}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      </div>
    </div>
  );
}

export default FormModal;

{
  /* <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-end z-50 md:justify-end md:items-center">
      <div className="bg-white w-full px-4 py-4 md:h-screen md:w-96">
        <TaskForm handleClose={handleClose} />
      </div>
    </div> */
}
