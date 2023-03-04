import React from 'react';
import TaskItem from './TaskItem';

function ItemBox({ task, handleOpen }) {
  return (
    <section
      className=" border-b-4 border-zinc-100 md:bg-zinc-50 bg-gray-200 rounded-sm p-4 cursor-pointer md:min-h-[200px] md:hover:bg-zinc-100"
      onClick={() => handleOpen(task._id)}
    >
      <TaskItem task={task} />
    </section>
    // <section
    //   className="w-full border-t border-zinc-200 py-3 px-3 md:border-t-0 md:border-b"
    //   onClick={() => handleOpen(task._id)}
    // >
    //   <TaskItem task={task} />
    // </section>
  );
}

export default ItemBox;
