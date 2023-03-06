import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, reset } from '../features/tasks/taskSlice';

import ItemBox from './ItemBox';
import { BiChevronRight, BiListPlus } from 'react-icons/bi';
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
  return (
    <>
      <div className=" mt-14 md:mt-0 bg-gray-200 md:bg-gray-200 md:ml-[167px] h-screen flex flex-col text-sm md:w-screen">
        <section className=" md:ml-[200px]">
          <div className=" mx-6 mt-6 flex items-center justify-between gap-x-4">
            <div>
              <div className="flex items-center gap-x-2 text-gray-500 font-medium mb-2">
                <span className=" hover:underline hover:underline-offset-4 cursor-pointer decoration-[#ff7445]">
                  Dashboard
                </span>{' '}
                <BiChevronRight />{' '}
                <span className=" hover:underline hover:underline-offset-4 cursor-pointer decoration-[#ff7445]">
                  Facility Tasks
                </span>{' '}
                <BiChevronRight /> {currentTaskStatus}
              </div>
              <div className="">
                <h1 className="font-semibold text-xl md:text-2xl mb-0 pb-1 text-gray-800">
                  Facility Tasks
                </h1>
                <p className="text-gray-800 font-semibold">{getDate()}</p>
              </div>
            </div>
            <div className="fixed bottom-6 right-4 lg:relative z-40">
              <button
                className=" hover:bg-[#cf5126] rounded-full md:rounded-md text-white font-semibold bg-[#ff7445] flex items-center justify-between gap-x-2 p-5 md:p-4 md:py-2 z-49 md:shadow-sm shadow-2xl shadow-zinc-800"
                onClick={handleOpen}
              >
                <p className="text-white font-semibold hidden md:block">
                  Create Task
                </p>
                <BiListPlus className=" text-lg" />
              </button>
            </div>
          </div>
          <div className="md:fixed top-0 left-[167px] md:bg-zinc-50 md:h-screen">
            <ul className=" overflow-x-scroll flex md:flex-col font-semibold md:font-normal">
              <li
                className={` ${
                  currentTaskStatus === 'All'
                    ? 'md:bg-[#faad8c3d] border-[#ff7445] text-gray-800'
                    : 'border-gray-200 md:border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#ff7445] px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('All')}
              >
                All Tasks{' '}
                <div className=" w-4 h-4 rounded-full flex items-center justify-center bg-zinc-300 text-xs ml-1 md:bg-zinc-200 text-zinc-800 font-semibold">
                  {tasks.length}
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'Not Started'
                    ? 'md:bg-[#faad8c3d] border-[#ff7445] text-gray-800'
                    : 'border-gray-200 md:border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#ff7445]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('Not Started')}
              >
                Not Started
                <div className=" w-4 h-4 rounded-full flex items-center justify-center bg-zinc-300 text-xs ml-1 md:bg-zinc-200 text-zinc-800 font-semibold">
                  {
                    tasks.filter((task) => task.taskStatus === 'Not Started')
                      .length
                  }
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'In Progress'
                    ? 'md:bg-[#faad8c3d] border-[#ff7445] text-gray-800'
                    : ' border-gray-200 md:border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#ff7445]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('In Progress')}
              >
                In Progress
                <div className=" w-4 h-4 rounded-full flex items-center justify-center bg-zinc-300 text-xs ml-1 md:bg-zinc-200 text-zinc-800 font-semibold">
                  {
                    tasks.filter((task) => task.taskStatus === 'In Progress')
                      .length
                  }
                </div>
              </li>
              <li
                className={` ${
                  currentTaskStatus === 'Completed'
                    ? 'md:bg-[#faad8c3d] border-[#ff7445] text-gray-800'
                    : 'border-gray-200 md:border-zinc-50 text-gray-500'
                } cursor-pointer md:border-r-4 md:border-b-0 border-b-4 hover:border-[#ff7445]  px-6 min-w-fit py-3 md:w-[200px] flex items-center md:justify-between md:font-medium`}
                onClick={() => setCurrentTaskStatus('Completed')}
              >
                Completed
                <div className=" w-4 h-4 rounded-full flex items-center justify-center bg-zinc-300 text-xs ml-1 md:bg-zinc-200 text-zinc-800 font-semibold">
                  {
                    tasks.filter((task) => task.taskStatus === 'Completed')
                      .length
                  }
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="md:ml-[200px] md:bg-gray-200 bg-gray-200">
          <div className=" m-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
