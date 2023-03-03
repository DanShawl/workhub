import { BiRadioCircle } from 'react-icons/bi';
import { BsFillCircleFill } from 'react-icons/bs';
function TaskItem({ task }) {
  let priorityColor;
  if (task.priority === 'Low') {
    priorityColor = 'text-green-500';
  }
  if (task.priority === 'Medium') {
    priorityColor = 'text-orange-500';
  }
  if (task.priority === 'High') {
    priorityColor = 'text-red-500';
  }

  return (
    <div className="flex flex-col  cursor-pointer pb-4 md:relative md:h-full">
      <div className="flex items-center">
        <BsFillCircleFill className={`${priorityColor} text-[0.3rem]`} />
        <h1 className="mb-0 ml-2 font-bold">{task.text}</h1>
      </div>
      <div className="text-xs font-semibold flex gap-1">
        <p className="text-zinc-400">
          {new Date(task.createdAt).toLocaleString('default', {
            month: 'long',
          })}{' '}
          {''}
        </p>
        <p className="text-zinc-400">
          {new Date(task.createdAt).toLocaleString('default', {
            day: 'numeric',
          })}
        </p>
      </div>
      <p className="text-zinc-500 leading-snug mt-2 md:max-w-2xl mb-4">
        {task.description}
      </p>

      <p className="bg-zinc-200 px-2 py-[2px] text-xs font-semibold rounded-[4px] max-w-fit md:absolute bottom-0 left-0">
        {task.taskStatus}
      </p>

      {/* <h3 className="text-base font-bold mt-2 mb-2">{task.text}</h3>
      <div className="flex gap-3">
        <p
          className={`${priorityColor} bg- px-2 py-[2px] text-sm font-semibold rounded-[4px]`}
        >
          {task.priority}
        </p>
        <p className="bg-zinc-200 px-2 py-[2px] text-sm font-semibold rounded-[4px]">
          {task.taskStatus}
        </p>
      </div>

      <p className="text-zinc-500 leading-snug mt-2 md:max-w-2xl">
        {task.description}
      </p>

      <div className="text-sm flex gap-1 mt-3 ">
        <p className="text-[#f16232]">
          {new Date(task.createdAt).toLocaleString('default', {
            month: 'long',
          })}
        </p>
        <p className="text-[#f16232]">
          {new Date(task.createdAt).toLocaleString('default', {
            day: 'numeric',
          })}
        </p>
      </div> */}
    </div>
  );
}

export default TaskItem;
