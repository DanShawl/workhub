import { BsFillCircleFill } from 'react-icons/bs';

/* ----------- Task Item: Grid element ----------- */

function TaskItem({ task }) {
  //  Determine Priority color
  let priorityColor;
  if (task.priority === 'Low') {
    priorityColor = 'text-green-500';
  }
  if (task.priority === 'Medium') {
    priorityColor = 'text-orange-400';
  }
  if (task.priority === 'High') {
    priorityColor = 'text-red-700';
  }

  return (
    <div className="flex flex-col  cursor-pointer pb-4 md:relative md:h-full overflow-hidden">
      {/* ----------- Task Item Title ----------- */}
      <div className="flex items-center mb-4">
        <BsFillCircleFill className={`${priorityColor} text-[0.3rem]`} />
        <h2 className="mb-0 ml-2 font-bold text-[#2e4753] text-base md:text-base">
          {task.text}
        </h2>
      </div>

      {/* ----------- Task Date/Priority ----------- */}
      <div className="border-b border-zinc-200 md:border-zinc-300 pb-4 flex gap-x-8 flex-wrap">
        <div>
          <p className="text-xs font-bold flex gap-1 text-zinc-400">
            Created/Updated
          </p>
          <div className=" text-sm font-semibold flex gap-x-1">
            <p className="text-[#2e4753]">
              {new Date(task.createdAt).toLocaleString('default', {
                month: 'long',
              })}{' '}
              {''}
            </p>
            <p className="text-[#2e4753]">
              {new Date(task.createdAt).toLocaleString('default', {
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold flex text-zinc-400">Task Priority</p>
          <p className=" text-sm font-semibold ">{task.priority}</p>
        </div>
      </div>

      {/* ----------- Task Status/Description ----------- */}
      <div className="mt-4">
        <div className="mb-4">
          <p className=" mb-1 text-xs font-bold flex text-zinc-400">
            Task Status
          </p>
          <p className="bg-zinc-300 md:bg-zinc-200 px-2 py-[2px] text-sm font-semibold rounded-[4px] max-w-fit ">
            {task.taskStatus}
          </p>
        </div>
        <p className="text-xs font-bold flex gap-1 text-zinc-400">Notes</p>
        <p className=" text-sm font-medium text-gray-600 leading-snug md:max-w-2xl">
          {task.description}
        </p>
      </div>
    </div>
  );
}

export default TaskItem;
