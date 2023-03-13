import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, deleteTask } from '../features/tasks/taskSlice';
import {
  BiCheck,
  BiRevision,
  BiX,
  BiTrash,
  BiRadioCircle,
  BiRadioCircleMarked,
} from 'react-icons/bi';

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
      <h2 className="text-sm pl-1 text-center md:mb-8">
        {currentItem.length > 0 ? 'Update Work Order' : 'Create Work Order'}
      </h2>
      <button
        className=" absolute p-1 rounded-full -top-1 -right-1 text-xl text-[#4a4a4a] hover:bg-gray-100"
        onClick={handleClose}
      >
        <BiX />
      </button>
      <form onSubmit={onFormSubmit} className=" md:flex md:flex-col md:h-full">
        {/* ----------- Task Title Input ----------- */}
        <div className="flex flex-col gap-2">
          <div>
            <label className="mt-4 text-gray-500 font-semibold">Title</label>
            <input
              type="text"
              placeholder="e.g. Water Heater Replacement"
              name="text"
              id="text"
              value={text}
              // currentItem ? currentItem[0].text :
              onChange={(e) => setText(e.target.value)}
              className=" mt-1 w-full border-gray-200 py-2 px-2 border-[1.5px] rounded-md outline-none font-medium text-gray-600 focus:bg-gray-100"
            />
            {/* <input
            type="text"
            placeholder="Task title"
            name="text"
            id="text"
            value={text}
            // currentItem ? currentItem[0].text :
            onChange={(e) => setText(e.target.value)}
            className="w-full text-xl font-semibold p-1 border-b border-zinc-200 focus:border-[#ff7445] focus:border-b-2 outline-none"
          /> */}
          </div>

          {/* ----------- Task Description Input ----------- */}
          <div className="mt-3">
            <label className="text-gray-500 font-semibold">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="e.g. Find dealer and schedule work to replace AO Smith Preferred water heater."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="6"
              className=" mt-1 w-full py-2 px-2 border-gray-200 border-[1.5px] focus:bg-gray-100 rounded-md outline-none font-medium resize-none text-gray-600"
            ></textarea>
          </div>

          {/* ----------- Task Priority Input ----------- */}

          <div className=" mt-4">
            <label className="text-gray-500 font-semibold">Priority</label>
            <div className="mt-1 flex flex-grow gap-x-2 md:gap-x-0 justify-between text-gray-600 text-xs border-gray-200 md:border-[1.5px] rounded-md">
              <input
                type="button"
                name="priority"
                placeholder="Low"
                id="priority-select"
                value={'Low'}
                onClick={() => selectPriority('Low')}
                className={` cursor-pointer flex-1 py-2 rounded-md md:rounded-l-md md:rounded-r-none flex items-center justify-center border ${
                  active && priority === 'Low'
                    ? // ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                      'bg-[#ff7445] text-white hover:bg-[#ff6b39]'
                    : 'border-gray-200 md:border-gray-50 text-gray-500 hover:bg-gray-100'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="Medium"
                id="priority-select"
                value={'Medium'}
                onClick={() => selectPriority('Medium')}
                className={` cursor-pointer flex-1 py-2 rounded-md md:rounded-none flex items-center justify-center border ${
                  active && priority === 'Medium'
                    ? ' bg-[#ff7445] text-white hover:bg-[#ff6b39]'
                    : 'border-gray-200 md:border-gray-50 text-gray-500 hover:bg-gray-100'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="High"
                id="priority-select"
                value={'High'}
                onClick={() => selectPriority('High')}
                className={` cursor-pointer  flex-1 py-2 rounded-md md:rounded-r-md md:rounded-l-none flex items-center justify-center border ${
                  active && priority === 'High'
                    ? 'bg-[#ff7445] text-white hover:bg-[#ff6b39]'
                    : 'border-gray-200 md:border-gray-50 text-gray-500 hover:bg-gray-100'
                } font-semibold`}
              />
            </div>
          </div>

          {/* ----------- Task Status Input ----------- */}
          <div className=" mt-4 mb-12">
            <label className="mb-4 text-gray-500 font-semibold">Status</label>
            <div className=" mt-1 border-gray-200 border-[1.5px] rounded-md">
              <button
                className={` px-4 py-2 flex justify-between items-center w-full border-b border-gray-300 hover:bg-gray-100 rounded-t-md ${
                  active && taskStatus === 'Open' && 'bg-gray-100'
                }`}
                type="button"
                onClick={() => selectTaskStatus('Open')}
              >
                <div className="flex items-center gap-x-4">
                  <BiX
                    className={`text-xl ${
                      active && taskStatus === 'Open'
                        ? 'text-[#e54949]'
                        : 'text-gray-600'
                    } `}
                  />
                  <div className="text-left">
                    <h4 className="text-gray-600 font-semibold">Open</h4>
                    <p className=" text-xs text-gray-500">
                      Work order has not been started.
                    </p>
                  </div>
                </div>
                {active && taskStatus === 'Open' ? (
                  <BiRadioCircleMarked className="text-[#ff7445] text-xl" />
                ) : (
                  <BiRadioCircle className="text-xl text-gray-600" />
                )}
              </button>
              <button
                className={` px-4 py-2 flex justify-between items-center w-full border-b border-gray-300 hover:bg-gray-100 ${
                  active && taskStatus === 'In Progress' && 'bg-gray-100'
                }`}
                type="button"
                onClick={() => selectTaskStatus('In Progress')}
              >
                <div className="flex items-center gap-x-4">
                  <BiRevision
                    className={`text-xl ${
                      active && taskStatus === 'In Progress'
                        ? 'text-[#ff7445]'
                        : 'text-gray-600'
                    } `}
                  />
                  <div className="text-left">
                    <h4 className="text-gray-600 font-semibold">In Progress</h4>
                    <p className=" text-xs text-gray-500">
                      Work order is currently in progress.
                    </p>
                  </div>
                </div>
                {active && taskStatus === 'In Progress' ? (
                  <BiRadioCircleMarked className="text-[#ff7445] text-xl" />
                ) : (
                  <BiRadioCircle className="text-xl text-gray-600" />
                )}
              </button>
              <button
                className={` px-4 py-2 flex justify-between items-center w-full hover:bg-gray-100 rounded-b-md"
                 ${active && taskStatus === 'Closed' && 'bg-gray-100'}`}
                type="button"
                onClick={() => selectTaskStatus('Closed')}
              >
                <div className="flex items-center gap-x-4">
                  <BiCheck
                    className={`text-xl ${
                      active && taskStatus === 'Closed'
                        ? 'text-[#54af3f]'
                        : 'text-gray-600'
                    } `}
                  />
                  <div className="text-left">
                    <h4 className="text-gray-600 font-semibold">Closed</h4>
                    <p className=" text-xs text-gray-500">
                      Work order has been completed or cancelled.
                    </p>
                  </div>
                </div>
                {active && taskStatus === 'Closed' ? (
                  <BiRadioCircleMarked className="text-[#ff7445] text-xl" />
                ) : (
                  <BiRadioCircle className="text-xl text-gray-600" />
                )}
              </button>
            </div>

            {/* <div className="flex justify-around gap-4 text-gray-800">
              <div className="flex flex-col justify-center items-center gap-y-2 flex-1">
                <button
                  type="button"
                  onClick={() => selectTaskStatus('Open')}
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'Open'
                      ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                      : 'border-gray-100 text-gray-500'
                  } font-bold`}
                >
                  <BiX />
                </button>
                <p className=" font-medium">Open</p>
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
                  
                </button>
                <p className=" font-medium">In Progress</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-y-2 flex-1">
                <button
                  type="button"
                  onClick={() => selectTaskStatus('Closed')}
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'Closed'
                      ? 'border-[#ff7445] hover:bg-[#faad8c3d] bg-[#faad8c3d]'
                      : 'border-gray-100 text-gray-500'
                  } font-bold`}
                >
                  <BiCheck />
                </button>
                <p className=" font-medium">Closed</p>
              </div>
            </div> */}
          </div>

          {/* ----------- Create/Update / Delete Buttons ----------- */}
        </div>
        {/* <div className=""> */}
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
              {currentItem.length > 0
                ? 'Update Work Order'
                : 'Create Work Order'}
            </button>
          </div>
        </div>
        {/* </div> */}
      </form>
    </section>
  );
}
export default TaskForm;
