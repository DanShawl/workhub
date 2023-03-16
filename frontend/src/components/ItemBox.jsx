import React from 'react';
import TaskItem from './TaskItem';

/* ----------- General Purpose Item Component ----------- */
function ItemBox({ task, handleOpen }) {
  return (
    <section
      className=" mb-4 md:mb-0 bg-[#efefef]  rounded-sm p-4 cursor-pointer md:min-h-[200px] md:hover:bg-[#e6e6e6] shadow-sm min-w-[200px]"
      onClick={() => handleOpen(task._id)}
    >
      <TaskItem task={task} />
    </section>
  );
}
// bg-gray-100
export default ItemBox;
