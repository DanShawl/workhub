import React from 'react';
import TaskItem from './TaskItem';

/* ----------- General Purpose Item Component ----------- */
function ItemBox({ task, handleOpen }) {
  return (
    <section
      className=" mb-4 md:mb-0 border-[1px] border-gray-200 bg-[#ffffff]  rounded-md p-4 cursor-pointer md:min-h-[200px] md:hover:bg-zinc-100 shadow-sm min-w-[200px]"
      onClick={() => handleOpen(task._id)}
    >
      <TaskItem task={task} />
    </section>
  );
}
// bg-gray-100
export default ItemBox;
