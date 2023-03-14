import React from 'react';
import TaskItem from './TaskItem';

/* ----------- General Purpose Item Component ----------- */
function ItemBox({ task, handleOpen }) {
  return (
    <section
      className=" mb-4 md:mb-0 border-2 border-gray-100 md:bg-[#ffffff] bg-zinc-50  rounded-md p-4 cursor-pointer md:min-h-[200px] md:hover:bg-zinc-100 shadow-sm min-w-[200px]"
      onClick={() => handleOpen(task._id)}
    >
      <TaskItem task={task} />
    </section>
  );
}
// bg-gray-100
export default ItemBox;
