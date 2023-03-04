import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, reset } from '../features/tasks/taskSlice';

import ItemBox from './ItemBox';
import { BiChevronRight } from 'react-icons/bi';
import Spinner from '../components/Spinner';
import FormModal from './FormModal';

const TaskDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );

  const [currentTask, setCurrentTask] = useState(null);
  const [currentTaskStatus, setCurrentTaskStatus] = useState('All');
  const [toggleModal, setToggleModal] = useState(false);

  const handleOpen = (taskID) => {
    setCurrentTask(tasks.filter((task) => task._id === taskID));
    setToggleModal(true);
  };

  const handleClose = () => {
    setCurrentTask(null);
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

  console.log(tasks);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className=" mt-14 md:mt-0 bg-gray-200 md:ml-[167px] h-screen flex flex-col text-sm md:w-screen">
        <section className="md:max-w-fit md:ml-[200px]">
          <div className=" mx-6 mt-6">
            <div className="flex items-center gap-x-2 text-gray-500 font-medium mb-2">
              <span className=" hover:underline hover:underline-offset-4 cursor-pointer decoration-[#f16232]">
                Dashboard
              </span>{' '}
              <BiChevronRight />{' '}
              <span className=" hover:underline hover:underline-offset-4 cursor-pointer decoration-[#f16232]">
                Facility Tasks
              </span>{' '}
              <BiChevronRight /> {currentTaskStatus}
            </div>
            <h1 className="font-bold text-2xl mb-0 pb-1 text-[#202124]">
              Facility Tasks
            </h1>
            <p>March 10, 2023</p>
          </div>
          <div className="md:fixed top-0 left-[167px] md:bg-zinc-50 md:h-screen">
            <ul className=" overflow-x-scroll flex md:flex-col font-semibold md:font-normal">
              <li
                className={` ${
                  currentTaskStatus === 'All'
                    ? 'md:bg-[#f1623237] border-[#f16232] text-[#4a4a4a]'
                    : 'border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#f16232] px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between`}
                onClick={() => setCurrentTaskStatus('All')}
              >
                All Tasks{' '}
                <div className=" w-4 h-4 text-white rounded-full flex items-center justify-center bg-neutral-500 text-xs ml-1 md:bg-zinc-200 md:text-[#4a4a4a] font-semibold">
                  {tasks.length}
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'Not Started'
                    ? 'md:bg-[#f1623237] border-[#f16232] text-[#4a4a4a]'
                    : 'border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#f16232]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between`}
                onClick={() => setCurrentTaskStatus('Not Started')}
              >
                Not Started
                <div className=" w-4 h-4 text-white rounded-full flex items-center justify-center bg-neutral-500 text-xs ml-1 md:bg-zinc-200 md:text-[#4a4a4a] font-semibold">
                  {
                    tasks.filter((task) => task.taskStatus === 'Not Started')
                      .length
                  }
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'In Progress'
                    ? 'md:bg-[#f1623237] border-[#f16232] text-[#4a4a4a]'
                    : 'border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#f16232]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between`}
                onClick={() => setCurrentTaskStatus('In Progress')}
              >
                In Progress
                <div className=" w-4 h-4 text-white rounded-full flex items-center justify-center bg-neutral-500 text-xs ml-1 md:bg-zinc-200 md:text-[#4a4a4a] font-semibold">
                  {
                    tasks.filter((task) => task.taskStatus === 'In Progress')
                      .length
                  }
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'Completed'
                    ? 'md:bg-[#f1623237] border-[#f16232] text-[#4a4a4a]'
                    : 'border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#f16232]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between`}
                onClick={() => setCurrentTaskStatus('Completed')}
              >
                Completed
                <div className=" w-4 h-4 text-white rounded-full flex items-center justify-center bg-neutral-500 text-xs ml-1 md:bg-zinc-200 md:text-[#4a4a4a] font-semibold">
                  {
                    tasks.filter((task) => task.taskStatus === 'Completed')
                      .length
                  }
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="md:ml-[200px] md:bg-gray-200 bg-zinc-50">
          {/* <div className=" mx-6 mt-4 p-4 bg-gray-200 border-[#f1623274] border-2 rounded-sm">
            You have{' '}
            {currentTaskStatus !== 'All'
              ? tasks.filter((task) => task.taskStatus === currentTaskStatus)
                  .length
              : tasks.length}{' '}
            under the category {currentTaskStatus}.
          </div> */}
          <div className=" m-6 md:grid grid-cols-3 -order-last gap-6">
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
              <h1>You have no tasks.</h1>
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