import React from 'react';
import TaskItem from './TaskItem';

function ItemBox({ task, handleOpen }) {
  return (
    <section
      className="w-full border-t border-zinc-200 py-3 px-3 md:border-t-0 md:border-b"
      onClick={() => handleOpen(task._id)}
    >
      <TaskItem task={task} />
    </section>
  );
}

export default ItemBox;
