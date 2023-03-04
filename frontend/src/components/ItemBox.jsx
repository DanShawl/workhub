import React from 'react';
import TaskItem from './TaskItem';

function ItemBox({ task, handleOpen }) {
  return (
    <section
      className=" mb-1 md:mb-0 border-b-4 border-zinc-100 md:bg-zinc-50 bg-gray-200 rounded-sm p-4 cursor-pointer md:min-h-[200px] md:hover:bg-zinc-100"
      onClick={() => handleOpen(task._id)}
    >
      <TaskItem task={task} />
    </section>
  );
}

export default ItemBox;
