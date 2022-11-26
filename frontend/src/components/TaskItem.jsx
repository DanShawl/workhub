import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();
  let priorityColor;
  let priorityTextColor;
  if (task.priority == 'Low') {
    priorityColor = 'bg-green-100';
    priorityTextColor = 'text-green-600';
  }
  if (task.priority == 'Medium') {
    priorityColor = 'bg-orange-100';
    priorityTextColor = 'text-orange-400';
  }
  if (task.priority == 'High') {
    priorityColor = 'bg-red-100';
    priorityTextColor = 'text-red-400';
  }

  return (
    //  priority, status, title, date, description,
    <div className="flex flex-col md:hover:bg-zinc-100 cursor-pointer px-3 rounded-md pb-2">
      <h3 className="text-base font-black mt-2 mb-2">{task.text}</h3>
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
        <p className="text-zinc-500">
          {new Date(task.createdAt).toLocaleString('default', {
            month: 'long',
          })}
        </p>
        <p className="text-zinc-500">
          {new Date(task.createdAt).toLocaleString('default', {
            day: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
}

export default TaskItem;
