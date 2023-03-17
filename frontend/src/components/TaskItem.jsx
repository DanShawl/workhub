// import { BsFillCircleFill } from 'react-icons/bs';

/* ----------- Task Item: Grid element ----------- */

function TaskItem({ task }) {
  //  Determine Priority color
  let priorityColor;
  if (task.priority === 'Low') {
    priorityColor = 'bg-[#feffbb]';
  }
  if (task.priority === 'Medium') {
    priorityColor = 'bg-[#cbffbb]';
  }
  if (task.priority === 'High') {
    priorityColor = 'bg-[#ffbbbb]';
  }

  return (
    // <div className="flex flex-col justify-between cursor-pointer md:relative md:h-full overflow-hidden mx-2">
    <div className="flex gap-x-4 justify-between cursor-pointer md:relative md:h-full overflow-hidden mx-2">
      <div className=" text-xs font-medium flex flex-col items-center justify-center gap-x-1">
        <p className="text-[#6b6b6b] text-2xl">
          {new Date(task.createdAt).toLocaleString('default', {
            day: 'numeric',
          })}
        </p>
        <p className="text-[#6b6b6b]">
          {new Date(task.createdAt).toLocaleString('default', {
            month: 'long',
          })}{' '}
          {''}
        </p>
      </div>
      {/* ----------- Task Item Title ----------- */}
      <div>
        <div className="flex items-center mb-2">
          {/* <BsFillCircleFill className={`${priorityColor} text-[0.3rem]`} /> */}
          <h2 className="mb-0 font-bold text-[#302f2d] text-lg md:text-sm">
            {task.text}
          </h2>
        </div>

        {/* ----------- Task Date/Priority ----------- */}
        <div className=" flex gap-x-8 flex-wrap text-[#212121]">
          {/* <div>
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
          </div> */}
          {/* <div>
            <p className="text-xs font-bold mb-[2px] text-[#6b6b6b]">
              Task Priority
            </p>
            <p className=" text-xs font-medium text-[#6b6b6b]">
              {task.priority}
            </p>
          </div> */}
          <div className="flex gap-x-2 mb-4">
            {/* <p className=" mb-1 text-xs font-bold flex text-[#6b6b6b]">
              Task Status
            </p> */}
            <p
              className={` ${priorityColor}  px-2 py-[2px] text-xs font-semibold rounded-[4px] max-w-fit `}
            >
              {task.priority}
            </p>
            <p className="bg-zinc-300 md:bg-zinc-200 px-2 py-[2px] text-xs font-semibold rounded-[4px] max-w-fit ">
              {task.taskStatus}
            </p>
          </div>
        </div>
        {/* ----------- Task Status/Description ----------- */}
        <div className="">
          {/* <p className="text-xs font-bold flex gap-1 text-[#6b6b6b]">Notes</p> */}
          <p className=" text-sm md:text-xs font-medium text-[#6b6b6b] leading-snug md:max-w-2xl">
            {/* text-gray-600 */}
            {task.description}
          </p>
        </div>
        {/* <p
          className={` ${priorityColor}  px-2 py-[2px] text-xs font-semibold rounded-[4px] max-w-fit `}
        >
          {task.priority}
        </p> */}
        {/* 6b6b6b, 212121 */}
      </div>
    </div>
  );
}

export default TaskItem;
