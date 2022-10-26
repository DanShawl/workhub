import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();
  //  separate date string by ,
  return (
    <div className="goal">
      <h2>{task.text}</h2>
      <h3>{task.category}</h3>
      <h3>{task.priority}</h3>
      <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
      <button onClick={() => dispatch(deleteTask(task._id))} className="close">
        X
      </button>
    </div>
  );
}

export default TaskItem;
