import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, deleteTask } from '../features/tasks/taskSlice';
import { BiCheck, BiLoaderAlt, BiX, BiListPlus, BiTrash } from 'react-icons/bi';

/* ----------- Task Form: CRUD operations for task items ----------- */

function TaskForm({ handleClose, currentItem, setCurrentItem }) {
  //  State items for each piece of data in a "Task"
  const [text, setText] = useState(
    currentItem.length > 0 ? currentItem[0].text : ''
  );
  const [description, setDescription] = useState(
    currentItem.length > 0 ? currentItem[0].description : ''
  );
  const category = 'Task';
  const [priority, selectPriority] = useState(
    currentItem.length > 0 ? currentItem[0].priority : ''
  );
  const [taskStatus, selectTaskStatus] = useState(
    currentItem.length > 0 ? currentItem[0].taskStatus : ''
  );
  const [active, setActive] = useState(true);

  const dispatch = useDispatch();

  //  Function for creating / updating task items following form submit
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text, category, priority, taskStatus, description }));
    if (currentItem.length !== 0) dispatch(deleteTask(currentItem[0]._id));
    handleClose();
    setCurrentItem(null);
    setText('');
  };

  //  Function for deleting task items
  const onDelete = () => {
    dispatch(deleteTask(currentItem[0]._id));
    handleClose();
    setCurrentItem(null);
    setText('');
  };

  //  Side effect setting active true when priority or task status changes
  useEffect(() => {
    setActive(true);
    // if (priority && active === true) {
    //   setActive(!active);
    // }
  }, [priority, taskStatus]);

  return (
    <section>
      <h2 className="text-sm pl-1">
        {currentItem.length > 0 ? 'Update a Task' : 'Create a Task'}
      </h2>
      <form onSubmit={onFormSubmit}>
        {/* ----------- Task Title Input ----------- */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Task title"
            name="text"
            id="text"
            value={text}
            // currentItem ? currentItem[0].text :
            onChange={(e) => setText(e.target.value)}
            className="w-full text-xl font-semibold p-1 border-b border-zinc-200 focus:border-[#ff7445] focus:border-b-2 outline-none"
          />
          {/* ----------- Task Priority Input ----------- */}
          <div className=" mt-4">
            <h2 className="mb-4 text-gray-800">What is the priority level?</h2>
            <div className="flex flex-grow justify-between gap-4 text-gray-800">
              <input
                type="button"
                name="priority"
                placeholder="Low"
                id="priority-select"
                value={'Low'}
                onClick={() => selectPriority('Low')}
                className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 flex-1 py-2 rounded-md flex items-center justify-center border ${
                  active && priority === 'Low'
                    ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                    : 'border-gray-100 text-gray-500'
                } font-bold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="Medium"
                id="priority-select"
                value={'Medium'}
                onClick={() => selectPriority('Medium')}
                className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 flex-1 py-2 rounded-md flex items-center justify-center border ${
                  active && priority === 'Medium'
                    ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                    : 'border-gray-100 text-gray-500'
                } font-bold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="High"
                id="priority-select"
                value={'High'}
                onClick={() => selectPriority('High')}
                className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 flex-1 py-2 rounded-md flex items-center justify-center border ${
                  active && priority === 'High'
                    ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                    : 'border-gray-100 text-gray-500'
                } font-bold`}
              />
            </div>
          </div>

          {/* ----------- Task Status Input ----------- */}
          <div className=" mt-4">
            <h2 className="mb-4 text-gray-800">
              What is the status of the task?
            </h2>
            <div className="flex justify-around gap-4 text-gray-800">
              <div className="flex flex-col justify-center items-center gap-y-2 flex-1">
                <button
                  type="button"
                  onClick={() => selectTaskStatus('Not Started')}
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'Not Started'
                      ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                      : 'border-gray-100 text-gray-500'
                  } font-bold`}
                >
                  <BiX />
                </button>
                <p className=" font-medium">Not Started</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-y-2 flex-1">
                <button
                  type="button"
                  onClick={() => selectTaskStatus('In Progress')}
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'In Progress'
                      ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                      : 'border-gray-100 text-gray-500'
                  } font-bold`}
                >
                  <BiLoaderAlt />
                </button>
                <p className=" font-medium">In Progress</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-y-2 flex-1">
                <button
                  type="button"
                  onClick={() => selectTaskStatus('Completed')}
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'Completed'
                      ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                      : 'border-gray-100 text-gray-500'
                  } font-bold`}
                >
                  <BiCheck />
                </button>
                <p className=" font-medium">Completed</p>
              </div>
            </div>
          </div>

          {/* ----------- Task Description Input ----------- */}
          <textarea
            name="description"
            id="description"
            placeholder="Enter a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="30"
            rows="4"
            className="w-full py-3 px-4 bg-gray-50 rounded-md"
          ></textarea>

          {/* ----------- Create/Update / Delete Buttons ----------- */}
          <div
            className={
              currentItem.length > 0
                ? 'flex justify-between mb-4 md:mb-0 pl-1'
                : 'flex justify-end mb-4 md:mb-0 pl-1'
            }
          >
            <button
              type="button"
              onClick={onDelete}
              className={
                currentItem.length > 0
                  ? `rounded-full py-3 text-gray-500 hover:bg-zinc-100 text-lg px-3`
                  : 'hidden'
              }
            >
              <BiTrash />
            </button>
            <div className="flex justify-end gap-4">
              <button
                className="font-semibold rounded-md py-3 text-gray-500 hover:bg-zinc-100 text-sm px-5"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="font-semibold rounded-md py-3 text-white text-sm px-5 md:px-4 md:py-2 bg-[#ff7445] hover:bg-[#cf5126] shadow-md flex items-center gap-x-2"
                type="submit"
                // onClick={handleClose}
                // bg-[#ff5722]
              >
                {currentItem.length > 0 ? 'Update Task' : 'Create Task'}
                <BiListPlus className=" text-lg" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
export default TaskForm;
