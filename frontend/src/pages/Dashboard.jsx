import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from '../components/TaskForm';
import Spinner from '../components/Spinner';
import { getTasks, reset } from '../features/tasks/taskSlice';
import TaskItem from '../components/TaskItem';
import CategoryCount from '../components/CategoryCount';
import {
  BiBuildings,
  BiCopyAlt,
  BiListCheck,
  BiPackage,
  BiPlus,
  BiReceipt,
  BiRightArrowAlt,
  BiSpreadsheet,
  BiTask,
  BiTimeFive,
  BiTrash,
  BiWrench,
} from 'react-icons/bi';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );
  const [category, setCategory] = useState('All');

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // dispatch(getTasks());

    if (!user) {
      navigate('/login');
    }

    if (user) {
      dispatch(getTasks());
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <section className="category-counters">
          <CategoryCount tasks={tasks} />
        </section>
      </section>
      <TaskForm />
      <section className="categories-section">
        <h2>Current Work</h2>

        <div className="categories">
          <button
            className={`btn-reverse ${category === 'All' ? 'active' : ''} `}
            onClick={() => setCategory('All')}
          >
            All Work
          </button>
          <button
            className={`btn-reverse ${
              category === 'Work Order' ? 'active' : ''
            } `}
            onClick={() => setCategory('Work Order')}
          >
            <BiWrench />
            Work Orders
          </button>
          <button
            className={`btn-reverse ${category === 'Task' ? 'active' : ''} `}
            onClick={() => setCategory('Task')}
          >
            <BiTask />
            Facility Tasks
          </button>
          <button
            className={`btn-reverse ${
              category === 'Equipment Report' ? 'active' : ''
            } `}
            onClick={() => setCategory('Equipment Report')}
          >
            <BiPackage />
            Equipment Reports
          </button>
        </div>
      </section>
      <section className="content">
        {tasks.length > 0 ? (
          <div className="goals">
            {category !== 'All'
              ? tasks
                  .filter((task) => task.category === category)
                  .map((task) => <TaskItem key={task._id} task={task} />)
                  .reverse()
              : tasks
                  .map((task) => <TaskItem key={task._id} task={task} />)
                  .reverse()}
          </div>
        ) : (
          <h3>You have not set any Tasks.</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
