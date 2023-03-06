import React from 'react';
import TaskForm from './TaskForm';

{
  /* ----------- General Purpose Form Modal: Create and update tasks ----------- */
}
function FormModal({ toggleModal, handleClose, currentItem, setCurrentItem }) {
  if (!toggleModal) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-end z-50 md:items-center">
      <div className="bg-white w-full px-4 py-4 md:h-auto md:w-96 md:rounded-sm rounded-t-md">
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
