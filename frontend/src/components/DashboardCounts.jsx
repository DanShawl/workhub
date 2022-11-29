import React from 'react';

function DashboardCounts({ setCurrentStatus, tasks }) {
  // tasks.filter((task) => task.category === 'Task').length
  return (
    <div className="flex justify-between md:flex-col md:justify-between md:w-60 md:sticky md:top-40 md:mt-8 md:right-0 md:h-[200px] md:items-start font-semibold text-[#4a4a4a] flex-wrap mx-6 gap-3 md:flex-nowrap">
      <div
        className=" py-2 px-3 rounded-sm bg-white border-zinc-200 border flex-1 min-w-[40%] md:w-full hover:bg-[#f8f8f8] cursor-pointer"
        onClick={() => setCurrentStatus('Not Started')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.filter((task) => task.taskStatus === 'Not Started').length}{' '}
            <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#f16232] text-sm">Not Started</div>
      </div>
      <div
        className=" py-2 px-3 rounded-sm bg-white border-zinc-200 border flex-1 min-w-fit md:w-full hover:bg-[#f8f8f8] cursor-pointer"
        onClick={() => setCurrentStatus('In Progress')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.filter((task) => task.taskStatus === 'In Progress').length}{' '}
            <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#f16232] text-sm">In Progress</div>
      </div>
      <div
        className=" py-2 px-3 rounded-sm bg-white border-zinc-200 border flex-1 min-w-fit md:w-full hover:bg-[#f8f8f8] cursor-pointer"
        onClick={() => setCurrentStatus('Completed')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.filter((task) => task.taskStatus === 'Completed').length}{' '}
            <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#f16232] text-sm">Completed</div>
      </div>
      <div
        className=" py-2 px-3 rounded-sm bg-white border-zinc-200 border flex-1 min-w-fit md:w-full hover:bg-[#f8f8f8] cursor-pointer"
        onClick={() => setCurrentStatus('All')}
      >
        <div>
          <p className="text-2xl mb-1">
            {tasks.length} <span className="text-base">tasks</span>
          </p>
        </div>
        <div className="text-[#f16232] text-sm">All</div>
      </div>
    </div>
  );
}

export default DashboardCounts;
