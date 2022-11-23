import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TaskForm from '../components/TaskForm';
import Spinner from '../components/Spinner';
import { getTasks, reset } from '../features/tasks/taskSlice';
import TaskItem from '../components/TaskItem';
import CategoryCount from '../components/CategoryCount';
import {
  BiPackage,
  BiPlus,
  BiTask,
  BiWrench,
  BiPlusMedical,
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
  // bg-[#4cceac]
  // bg-[#6870fa]

  const getDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.toLocaleString('default', { month: 'long' });
    let year = newDate.getFullYear();

    return `${year} ${month < 10 ? `0${month}` : `${month}`} ${date}`;
  };
  return (
    <>
      <section className="md:ml-60 px-4 py-16">
        <section className="flex flex-col justify-center items-center py-10">
          {/* <h1>Welcome {user && user.name}</h1> */}
          <h1 className=" text-2xl -mb-1">Facility Tasks </h1>
          <p>{getDate()}</p>
          <button className=" mt-6 flex justify-center items-center gap-1 font-extrabold bg-[#6870fa] rounded-[3px] w-full py-3 text-white">
            {/* <BiPlus className="text-1xl" /> */}
            Add New
          </button>
        </section>
        <section className=" flex flex-col-reverse">
          <div className="">tasks</div>
          <div className="flex justify-around">
            {/* Make a component for the count (title as prop) */}
            {/* add button styles */}
            <div className="flex flex-col justify-center items-center">
              <div className=" w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center mb-2">
                3
              </div>
              Not Started
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className=" w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center">
                1
              </div>
              In Progress
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className=" w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center">
                2
              </div>
              Completed
            </div>
          </div>
        </section>
        <section></section>
        {/* <section className="heading">
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
        </section> */}
      </section>
    </>
  );
}

export default Dashboard;

{
  /* <section className="heading">
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
        </section> */
}
