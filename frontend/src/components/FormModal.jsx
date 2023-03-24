import React from 'react';
import ContactForm from './ContactForm';
import TaskForm from './TaskForm';

/* ----------- General Purpose Form Modal: Create and update tasks ----------- */
function FormModal({
  toggleModal,
  handleClose,
  currentItem,
  setCurrentItem,
  modalType,
}) {
  if (!toggleModal) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-end z-50 sm:items-center sm:justify-end">
      <div className="bg-white w-full px-4 py-4 sm:h-screen sm:w-96 sm:rounded-sm rounded-t-md sm:rounded-t-none sm:rounded-l-sm sm:max-h-full max-h-[95%] overflow-y-scroll ">
        {/* if formType = Task ? (TaskForm) : Contact */}
        {modalType === 'contact' ? (
          <ContactForm
            handleClose={handleClose}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        ) : (
          <TaskForm
            handleClose={handleClose}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        )}
      </div>
    </div>
  );
}

export default FormModal;
