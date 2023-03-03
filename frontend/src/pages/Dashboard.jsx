import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { getTasks, reset } from '../features/tasks/taskSlice';
import DashboardHeader from '../components/DashboardHeader';
import DashboardCounts from '../components/DashboardCounts';
import FormModal from '../components/FormModal';
import ItemBox from '../components/ItemBox';
import DashboardSideBar from '../components/DashboardSideBar';
import TaskDashboard from '../components/TaskDashboard';

function Dashboard() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [currentStatus, setCurrentStatus] = useState('All');
  // const [currentItem, setCurrentItem] = useState(null);
  // const { user } = useSelector((state) => state.auth);
  // const { tasks, isLoading, isError, message } = useSelector(
  //   (state) => state.tasks
  // );
  // const [toggleModal, setToggleModal] = useState(false);
  // const handleOpen = (taskID) => {
  //   setCurrentItem(tasks.filter((task) => task._id === taskID));
  //   setToggleModal(true);
  // };
  // const handleClose = () => {
  //   setCurrentItem(null);

  //   setToggleModal(false);
  // };

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }

  //   if (!user) {
  //     navigate('/login');
  //   }

  //   if (user) {
  //     dispatch(getTasks());
  //   }
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, navigate, isError, message, dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  // bg-[#4cceac]
  // bg-[#6870fa]

  return (
    <>
      <section className="md:pt-0 md:flex">
        <DashboardSideBar />
        <TaskDashboard />
        {/* Work Order Dashboard *  /}
        {/* Contact Dashboard */}
      </section>
      {/* <section className="md:ml-60 py-16 md:pt-0 md:w-[calc(100%-240px)]">
        <DashboardHeader handleOpen={handleOpen} />
        <section className=" flex flex-col-reverse md:flex-row md:relative">
          <div className=" mt-9 md:mt-0 md:border-r-2 border-zinc-200 md:max-w-[80%] md:min-w-[80%] bg-white">
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
      </section> */}
    </>
  );
}

export default Dashboard;
