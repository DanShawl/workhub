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

  let bgColor, textColor;
  if (task.priority === 'High') {
    textColor = '#c83838';
    bgColor = '#fea2a2';
  }
  if (task.priority === 'Low') {
    textColor = '#c0ce03';
    bgColor = '#fbffab';
  }
  if (task.priority === 'Medium') {
    textColor = '#d2711d';
    bgColor = '#ffaf6a';
  }
  // fbffab;
  const categoryIcon = () => {
    if (task.category === 'Work Order') return <BiWrench />;
    if (task.category === 'Task') return <BiTask />;
    if (task.category === 'Equipment Report') return <BiPackage />;
  };

  return (
    <div className="goal">
      <h3>{task.text}</h3>
      <p
        className="priority"
        style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      >
        {task.priority}
      </p>
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
