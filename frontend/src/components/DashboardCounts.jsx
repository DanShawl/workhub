import React from 'react';

function DashboardCounts() {
  return (
    <div className="flex justify-around md:flex-col md:justify-between md:w-60 md:sticky md:top-40 md:right-0 md:h-[200px] md:items-start font-semibold">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 md:px-6">
        <div className=" w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center mb-2 md:mb-0">
          3
        </div>
        Not Started
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 md:px-6">
        <div className=" w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center mb-2 md:mb-0">
          {' '}
          1
        </div>
        In Progress
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 md:px-6">
        <div className=" w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center mb-2 md:mb-0">
          {' '}
          2
        </div>
        Completed
      </div>
    </div>
  );
}

export default DashboardCounts;
