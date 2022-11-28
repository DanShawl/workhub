import React from 'react';

function DashboardCounts({ setCurrentStatus, tasks }) {
  // tasks.filter((task) => task.category === 'Task').length
  return (
    <div className="flex justify-between md:flex-col md:justify-between md:w-60 md:sticky md:top-40 md:right-0 md:h-[200px] md:items-start font-semibold text-[#4a4a4a] flex-wrap mx-6 gap-3">
      <div
        className=" py-2 px-3 rounded-md bg-zinc-100 flex-1 min-w-fit"
        onClick={() => setCurrentStatus('Not Started')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.filter((task) => task.taskStatus === 'Not Started').length}{' '}
            <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#6870fa]">Not Started</div>
      </div>
      <div
        className=" py-2 px-3 rounded-md bg-zinc-100 flex-1 min-w-fit"
        onClick={() => setCurrentStatus('In Progress')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.filter((task) => task.taskStatus === 'In Progress').length}{' '}
            <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#6870fa]">In Progress</div>
      </div>
      <div
        className=" py-2 px-3 rounded-md bg-zinc-100 flex-1 min-w-fit"
        onClick={() => setCurrentStatus('Completed')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.filter((task) => task.taskStatus === 'Completed').length}{' '}
            <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#6870fa]">Completed</div>
      </div>
      <div
        className=" py-2 px-3 rounded-md bg-zinc-100 flex-1 min-w-fit"
        onClick={() => setCurrentStatus('All')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.length} <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#6870fa]">All</div>
      </div>
    </div>
  );
}

export default DashboardCounts;
