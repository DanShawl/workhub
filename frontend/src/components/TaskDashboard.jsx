import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, reset } from '../features/tasks/taskSlice';

import ItemBox from './ItemBox';
import { BiChevronRight, BiListPlus, BiRightArrowAlt } from 'react-icons/bi';
import { VscAdd } from 'react-icons/vsc';
import Spinner from '../components/Spinner';
import FormModal from './FormModal';

/* ----------- Dashboard for Tasks: Component of main Dashboard Page ----------- */

const TaskDashboard = () => {
  //  Functions for getting user/task data
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );

  //  State for tasks/modal
  const [currentTask, setCurrentTask] = useState(null);
  const [currentTaskStatus, setCurrentTaskStatus] = useState('All');
  const [toggleModal, setToggleModal] = useState(false);

  //  Functions for handling modal information
  const handleOpen = (taskID) => {
    setCurrentTask(tasks.filter((task) => task._id === taskID));
    setToggleModal(true);
  };
  const handleClose = () => {
    setCurrentTask(null);
    setToggleModal(false);
  };

  //  Checking for user/errors
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

  //  Function for current date
  const getDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.toLocaleString('default', { month: 'long' });
    let year = newDate.getFullYear();

    return ` ${month} ${date}, ${year}`;
  };

  if (isLoading) {
    return <Spinner />;
  }

  // bg-[#ff7445]
  // bg-[#ff7043]

  // bg-gray-200
  // bg-[#f9f9f9]
  // f6f7f9
  //  e9e9e9
  //  ff5c35
  // ff7445
  // f6f7f9
  // edeeef
  // edf0f4
  // 2e4753
  return (
    <>
      <div className=" mt-14 md:mt-0 bg-[#f2f2f2] md:bg-[#fff] md:ml-[95px] h-screen flex flex-col text-sm md:w-fit">
        {/* <div className=" mt-14 md:mt-0 bg-gray-200 md:bg-[#f6f7f9] md:ml-[167px] h-screen flex flex-col text-sm md:w-screen"> */}
        {/* ----------- Task Dashboard Header/Sidebar: contains header info and task sorting ----------- */}
        {/* <section className=" md:ml-[200px]"> */}
        <section className=" md:ml-[200px]">
          <div className=" mx-6 mt-6 md:mb-6 flex items-center justify-between gap-x-4">
            <div>
              <div className="flex items-center gap-x-1 text-[#938f8f] font-normal text-xs mb-2">
                <span className=" hover:text-[#ff5c35] cursor-pointer decoration-[#ff5c35]">
                  Dashboard
                </span>{' '}
                <BiChevronRight className="" />{' '}
                <span className="   hover:text-[#ff5c35] cursor-pointer decoration-[#ff5c35]">
                  Work Orders
                </span>{' '}
                <BiChevronRight className="" /> {currentTaskStatus}
              </div>
              <div className="">
                <h1 className="font-semibold text-3xl mb-0 pb-1 text-[#212121]">
                  Work Orders
                </h1>
                <p className="text-[#6b6b6b] font-semibold text-xs">
                  {getDate()}
                </p>
              </div>
            </div>
            <div className="fixed bottom-6 right-4 lg:static z-40">
              <button
                className=" hover:bg-[#cf5126] rounded-full md:rounded-sm text-white font-semibold bg-[#ff5c35] flex items-center justify-between gap-x-2 p-5 md:p-4 md:py-2 z-49 md:shadow-sm shadow-2xl shadow-zinc-800"
                onClick={handleOpen}
              >
                <p className="text-white font-semibold hidden md:block">
                  Create Work Order
                </p>
                <VscAdd className=" text-xl md:text-base" />
              </button>
            </div>
          </div>

          {/* ----------- Task Sidebar: Sorting by status ----------- */}
          <div className="md:fixed top-0 left-[95px] md:border-r-[1px] md:border-gray-300 md:h-screen bg-[#f2f2f2]">
            <ul className=" overflow-x-scroll flex md:flex-col font-semibold md:font-normal md:text-xs">
              <li
                className={` ${
                  currentTaskStatus === 'All'
                    ? 'md:bg-[#faad8c3d] border-[#ff5c35] text-[#d23f0e]'
                    : 'border-gray-300 md:border-transparent text-gray-500 '
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-2 hover:border-[#ff5c35] px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('All')}
              >
                All Work Orders{' '}
                <div className=" w-4 h-4 rounded-full flex items-center justify-center text-xs ml-1 font-semibold">
                  {tasks.length}
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'Open'
                    ? 'md:bg-[#faad8c3d] border-[#ff5c35] text-[#d23f0e]'
                    : 'border-gray-300 md:border-transparent text-gray-500 '
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-2 hover:border-[#ff5c35]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('Open')}
              >
                Open
                <div className=" w-4 h-4 rounded-full flex items-center justify-center text-xs ml-1  font-semibold">
                  {tasks.filter((task) => task.taskStatus === 'Open').length}
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'In Progress'
                    ? 'md:bg-[#faad8c3d] border-[#ff5c35] text-[#d23f0e]'
                    : 'border-gray-300 md:border-transparent text-gray-500 '
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-2 hover:border-[#ff5c35]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('In Progress')}
              >
                In Progress
                <div className=" w-4 h-4 rounded-full flex items-center justify-center text-xs ml-1  font-semibold">
                  {
                    tasks.filter((task) => task.taskStatus === 'In Progress')
                      .length
                  }
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'Closed'
                    ? 'md:bg-[#faad8c3d] border-[#ff5c35] text-[#d23f0e]'
                    : 'border-gray-300 md:border-transparent text-gray-500 '
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-2 hover:border-[#ff5c35]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('Closed')}
              >
                Closed
                <div className=" w-4 h-4 rounded-full flex items-center justify-center  text-xs ml-1  font-semibold">
                  {tasks.filter((task) => task.taskStatus === 'Closed').length}
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ----------- Task Grid: Contains task items sorted by status ----------- */}
        <section className="md:ml-[200px] bg-[#fff] md:border-t-[1px] md:border-gray-300">
          <div className=" m-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#fff] rounded-md">
            {/* md:grid grid-cols-3 */}
            {tasks.length > 0 ? (
              currentTaskStatus !== 'All' ? (
                tasks
                  .filter((task) => task.taskStatus === currentTaskStatus)
                  .map((task) => (
                    <ItemBox
                      task={task}
                      key={task._id}
                      handleOpen={handleOpen}
                    />
                  ))
              ) : (
                tasks.map((task) => (
                  <ItemBox task={task} key={task._id} handleOpen={handleOpen} />
                ))
              )
            ) : (
              <div className="">
                <h1 className="flex gap-x-1">
                  You have no tasks.{' '}
                  <button
                    className=" decoration-[#ff7445] underline underline-offset-4 flex items-center gap-x hover:text-[#ff7445]"
                    onClick={handleOpen}
                  >
                    Create a task now.
                    <BiRightArrowAlt className="text-[#ff7445] text-lg" />
                  </button>
                </h1>
              </div>
            )}
          </div>
        </section>
        <FormModal
          setCurrentItem={setCurrentTask}
          toggleModal={toggleModal}
          handleClose={handleClose}
          currentItem={currentTask}
        />
      </div>
    </>
  );
};

export default TaskDashboard;
