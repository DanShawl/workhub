import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import {
  BiCalendar,
  BiCategory,
  BiCheck,
  BiTask,
  BiWrench,
  BiPackage,
} from 'react-icons/bi';
function TaskItem({ task }) {
  const dispatch = useDispatch();
  //  separate date string by ,
  // let bgColor;
  // if (task.priority === 'High') bgColor = 'red'

  const categoryIcon = () => {
    if (task.category === 'Work Order') return <BiWrench />;
    if (task.category === 'Task') return <BiTask />;
    if (task.category === 'Equipment Report') return <BiPackage />;
  };

  return (
    <div className="goal">
      <h3>{task.text}</h3>
      <p className="priority">{task.priority}</p>
      <div className="task-info">
        {/* <BiCategory /> */}
        {categoryIcon()}
        <p>{task.category}</p>
      </div>
      <div className="task-info">
        <BiCalendar />
        <p>{new Date(task.createdAt).toLocaleString('en-US').split(',')[0]}</p>
      </div>

      <div className="task-button">
        <button onClick={() => dispatch(deleteTask(task._id))}>
          <BiCheck />
          Complete Task
        </button>
      </div>
      {/* <button
        onClick={() => dispatch(deleteTask(task._id))}
        className="priority"
      >
        X
      </button> */}
    </div>
  );
}

export default TaskItem;
