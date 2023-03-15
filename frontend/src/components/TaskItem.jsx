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
        <h2 className="mb-0 ml-2 font-bold text-[#212121] text-sm md:text-sm">
          {task.text}
        </h2>
      </div>

      {/* ----------- Task Date/Priority ----------- */}
      <div className="border-b border-[#9f9f9f] md:border-[#d5d4d4] pb-4 flex gap-x-8 flex-wrap text-[#212121]">
        <div>
          <p className="text-xs font-bold flex gap-1 text-[#6b6b6b]">
            Created on
          </p>
          <div className=" text-xs font-medium flex gap-x-1">
            <p className="text-[#6b6b6b]">
              {new Date(task.createdAt).toLocaleString('default', {
                month: 'long',
              })}{' '}
              {''}
            </p>
            <p className="text-[#6b6b6b]">
              {new Date(task.createdAt).toLocaleString('default', {
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold mb-[2px] text-[#6b6b6b]">
            Task Priority
          </p>
          <p className=" text-xs font-medium text-[#6b6b6b]">{task.priority}</p>
        </div>
        <div className="mb-4">
          <p className=" mb-1 text-xs font-bold flex text-[#6b6b6b]">
            Task Status
          </p>
          <p className="bg-zinc-300 md:bg-zinc-200 px-2 py-[2px] text-xs font-semibold rounded-[4px] max-w-fit ">
            {task.taskStatus}
          </p>
        </div>
      </div>
      {/* 6b6b6b, 212121 */}

      {/* ----------- Task Status/Description ----------- */}
      <div className="mt-4">
        {/* <div className="mb-4">
          <p className=" mb-1 text-xs font-bold flex text-[#8e8e8e]">
            Task Status
          </p>
          <p className="bg-zinc-300 md:bg-zinc-200 px-2 py-[2px] text-xs font-semibold rounded-[4px] max-w-fit ">
            {task.taskStatus}
          </p>
        </div> */}
        <p className="text-xs font-bold flex gap-1 text-[#6b6b6b]">Notes</p>
        <p className=" text-xs font-medium text-[#6b6b6b] leading-snug md:max-w-2xl">
          {/* text-gray-600 */}
          {task.description}
        </p>
      </div>
    </div>
  );
}

export default TaskItem;
