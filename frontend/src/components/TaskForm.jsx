import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, deleteTask } from '../features/tasks/taskSlice';
import { BiX } from 'react-icons/bi';

import { CiTrash } from 'react-icons/ci';

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
    <section className=" relative md:h-full">
      <h2 className="text-sm text-center text-[#212121] md:mb-8">
        {currentItem.length > 0 ? 'Update Work Order' : 'Create Work Order'}
      </h2>
      <button
        className=" absolute p-1 rounded-full -top-1 -right-1 text-xl text-[#4a4a4a] hover:bg-gray-100"
        onClick={handleClose}
      >
        <BiX />
      </button>
      <form
        onSubmit={onFormSubmit}
        className=" md:flex md:flex-col md:justify-between md:h-full md:max-h-[93%]"
      >
        {/* ----------- Task Title Input ----------- */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="mt-4 text-[#6b6b6b] font-semibold text-xs">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Water Heater Replacement"
              name="text"
              id="text"
              value={text}
              // currentItem ? currentItem[0].text :
              onChange={(e) => setText(e.target.value)}
              className=" mt-1 w-full focus:border-gray-300 py-2 px-2 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] text-xs"
            />
          </div>

          {/* ----------- Task Description Input ----------- */}
          <div className="mt-3">
            <label className="text-[#6b6b6b] font-semibold text-xs">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="e.g. Find dealer and schedule work to replace AO Smith Preferred water heater."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="6"
              className=" mt-1 w-full py-2 px-2 focus:border-gray-300 border-[1px] border-transparent rounded-sm outline-none font-medium text-[#212121] hover:bg-[#efefef] bg-[#f9f9f9] resize-none text-xs"
            ></textarea>
          </div>

          {/* ----------- Task Status Input ----------- */}
          <div className="mt-3">
            <label className="text-[#6b6b6b] font-semibold text-xs">
              Status
            </label>
            <div className="flex flex-col">
              <div
                className="flex items-center hover:bg-[#efefef] p-2 rounded-sm cursor-pointer"
                onClick={() => selectTaskStatus('Open')}
              >
                <div className=" flex items-center pl-1 h-5 cursor-pointer">
                  <input
                    type="radio"
                    id="status-open"
                    value=""
                    checked={taskStatus === 'Open'}
                    name="status"
                    className=" cursor-pointer w-3 h-3 border-gray-200 "
                  />
                </div>
                <label
                  for="status-open"
                  className="font-semibold text-[#212121] cursor-pointer ml-4 text-xs w-full"
                >
                  Open
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-[#6b6b6b]"
                  >
                    The work order requires attention.
                  </p>
                </label>
              </div>
              <div
                className="flex items-center hover:bg-[#efefef] p-2 rounded-sm cursor-pointer"
                onClick={() => selectTaskStatus('In Progress')}
              >
                <div className=" flex items-center pl-1 h-5 cursor-pointer">
                  <input
                    type="radio"
                    id="status-in-progress"
                    value=""
                    checked={taskStatus === 'In Progress'}
                    name="status"
                    className=" cursor-pointer w-3 h-3 border-gray-200  "
                  />
                </div>
                <label
                  for="status-in-progress"
                  className="font-semibold text-[#212121] cursor-pointer ml-4 text-xs w-full"
                >
                  In Progress
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-[#6b6b6b]"
                  >
                    The work order is currently being worked on.
                  </p>
                </label>
              </div>
              <div
                className="flex items-center hover:bg-[#efefef] p-2 rounded-sm cursor-pointer"
                onClick={() => selectTaskStatus('Closed')}
              >
                <div className=" flex items-center pl-1 h-5 cursor-pointer">
                  <input
                    type="radio"
                    id="status-closed"
                    value=""
                    checked={taskStatus === 'Closed'}
                    name="status"
                    className=" cursor-pointer w-3 h-3 border-gray-200  "
                  />
                </div>

                <label
                  for="status-closed"
                  className="font-semibold text-[#212121] cursor-pointer ml-4 text-xs w-full"
                >
                  Closed
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-[#6b6b6b]"
                  >
                    Work order has been completed or cancelled.
                  </p>
                </label>
              </div>
            </div>
          </div>

          {/* ----------- Task Priority Input ----------- */}
          <div className=" mt-3 mb-8">
            <label className="text-[#6b6b6b] font-semibold text-xs">
              Priority
            </label>
            <div className="mt-1 flex flex-grow gap-x-2 md:gap-x-0 justify-between text-[#212121] text-xs  rounded-md  bg-[#f2f2f2] p-[1px]">
              <input
                type="button"
                name="priority"
                placeholder="Low"
                id="priority-select"
                value={'Low'}
                onClick={() => selectPriority('Low')}
                className={` cursor-pointer flex-1 py-2 rounded-md flex items-center justify-center border-[1px] ${
                  active && priority === 'Low'
                    ? ' bg-[#ffffff] text-[#212121] border-gray-200'
                    : ' text-[#6b6b6b] hover:bg-[#efefef] border-[#f2f2f2]'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="Medium"
                id="priority-select"
                value={'Medium'}
                onClick={() => selectPriority('Medium')}
                className={` cursor-pointer flex-1 py-2 rounded-md flex items-center justify-center border-[1px] ${
                  active && priority === 'Medium'
                    ? ' bg-[#ffffff] text-[#212121] border-gray-200'
                    : ' text-[#6b6b6b] hover:bg-[#efefef] border-[#f2f2f2]'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="High"
                id="priority-select"
                value={'High'}
                onClick={() => selectPriority('High')}
                className={` cursor-pointer flex-1 py-2 rounded-md flex items-center justify-center border-[1px] ${
                  active && priority === 'High'
                    ? ' bg-[#ffffff] text-[#212121] border-gray-200'
                    : ' text-[#6b6b6b] hover:bg-[#efefef] border-[#f2f2f2]'
                } font-semibold`}
              />
            </div>
          </div>

          {/* ----------- Create/Update / Delete Buttons ----------- */}
        </div>

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
                ? `rounded-full py-3 text-[#6b6b6b] hover:bg-zinc-100 text-lg px-3`
                : 'hidden'
            }
          >
            <CiTrash className="text-xl" />
          </button>
          <div className="flex justify-end gap-4">
            <button
              className="font-semibold rounded-md py-3 text-[#6b6b6b] hover:bg-zinc-100 text-sm px-5"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="font-semibold rounded-sm py-3 text-white text-sm px-5 md:px-4 md:py-2 bg-[#ff5c35] hover:bg-[#cf5126] shadow-md flex items-center gap-x-2"
              type="submit"
              // onClick={handleClose}
              // bg-[#ff5722]
            >
              {currentItem.length > 0
                ? 'Update Work Order'
                : 'Create Work Order'}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default TaskForm;
