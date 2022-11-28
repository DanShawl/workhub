import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { getTasks, reset } from '../features/tasks/taskSlice';
import DashboardHeader from '../components/DashboardHeader';
import DashboardCounts from '../components/DashboardCounts';
import FormModal from '../components/FormModal';
import ItemBox from '../components/ItemBox';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentStatus, setCurrentStatus] = useState('All');
  const [currentItem, setCurrentItem] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );
  const [toggleModal, setToggleModal] = useState(false);
  const handleOpen = (taskID) => {
    setCurrentItem(tasks.filter((task) => task._id === taskID));
    setToggleModal(true);
  };
  const handleClose = () => {
    setCurrentItem(null);

    setToggleModal(false);
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

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

  return (
    <>
      <section className="md:ml-60 py-16 md:pt-0 md:w-[calc(100%-240px)]">
        <DashboardHeader handleOpen={handleOpen} />
        <section className=" flex flex-col-reverse md:flex-row md:relative">
          <div className=" mt-9 md:mt-0 md:border-r-2 border-zinc-200 md:max-w-[80%] md:min-w-[80%]">
            {tasks.length > 0 ? (
              currentStatus !== 'All' ? (
                tasks
                  .filter((task) => task.taskStatus === currentStatus)
                  .map((task) => (
                    <ItemBox
                      task={task}
                      key={task._id}
                      handleOpen={handleOpen}
                    />
                  ))
                  .reverse()
              ) : (
                tasks
                  .map((task) => (
                    <ItemBox
                      task={task}
                      key={task._id}
                      handleOpen={handleOpen}
                    />
                  ))
                  .reverse()
              )
            ) : (
              <h1>You have no tasks</h1>
            )}
          </div>
          <DashboardCounts setCurrentStatus={setCurrentStatus} tasks={tasks} />
        </section>
        <FormModal
          setCurrentItem={setCurrentItem}
          toggleModal={toggleModal}
          handleClose={handleClose}
          currentItem={currentItem}
        />
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
