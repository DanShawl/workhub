import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, deleteTask } from '../features/tasks/taskSlice';

// import { BsFillCircleFill } from 'react-icons/bs';
import { BiCheck, BiLoaderAlt, BiX } from 'react-icons/bi';
function TaskForm({ handleClose, currentItem, setCurrentItem }) {
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
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text, category, priority, taskStatus, description }));
    if (currentItem.length !== 0) dispatch(deleteTask(currentItem[0]._id));
    handleClose();
    setCurrentItem(null);
    setText('');
  };

  const [active, setActive] = useState(true);

  useEffect(() => {
    console.log(priority);
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
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Task title"
            name="text"
            id="text"
            value={text}
            // currentItem ? currentItem[0].text :
            onChange={(e) => setText(e.target.value)}
            className="w-full text-xl font-semibold p-1 border-b border-zinc-200 focus:border-[#f16232] focus:border-b-2 outline-none"
          />
          <div className="text-[#4a4a4a] mt-4">
            <h2 className="mb-4">What is the priority level?</h2>
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
                    ? // ? 'border-green-300 bg-[#51ae4c76] hover:bg-[#51ae4c76]'
                      // 'border-[#6f6e6e2a] hover:bg-gray-300 bg-gray-300'
                      'border-[#f16232] hover:bg-[#fbcdbe] bg-[#fbcdbe]'
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
                    ? // ? 'border-[#faf55c] bg-[#c3be4181] hover:bg-[#c3be4181]'
                      // 'border-[#6f6e6e2a] hover:bg-gray-300 bg-gray-300'
                      'border-[#f16232] hover:bg-[#fbcdbe] bg-[#fbcdbe]'
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
                    ? // ? 'border-[#dd7575] bg-[#d75b5b83] hover:bg-[#ad414153]'
                      // 'border-[#6f6e6e2a] hover:bg-gray-300 bg-gray-300'
                      'border-[#f16232] hover:bg-[#fbcdbe] bg-[#fbcdbe]'
                    : 'border-gray-100 text-gray-500'
                } font-bold`}
              />
            </div>
          </div>
          <div className="text-[#4a4a4a] mt-4">
            <h2 className="mb-4">What is the status of the task?</h2>
            <div className="flex justify-around gap-4 text-gray-800">
              <div className="flex flex-col justify-center items-center gap-y-2 flex-1">
                <button
                  type="button"
                  onClick={() => selectTaskStatus('Not Started')}
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 max-h-fit h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'Not Started'
                      ? 'border-[#f16232] hover:bg-[#fbcdbe] bg-[#fbcdbe]'
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
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 max-h-fit h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'In Progress'
                      ? 'border-[#f16232] hover:bg-[#fbcdbe] bg-[#fbcdbe]'
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
                  className={` cursor-pointer hover:bg-zinc-300 bg-gray-100 max-h-fit h-10 w-10 rounded-full flex items-center justify-center border ${
                    active && taskStatus === 'Completed'
                      ? 'border-[#f16232] hover:bg-[#fbcdbe] bg-[#fbcdbe]'
                      : 'border-gray-100 text-gray-500'
                  } font-bold`}
                >
                  <BiCheck />
                </button>
                <p className=" font-medium">Completed</p>
              </div>
            </div>
          </div>

          <textarea
            name="description"
            id="description"
            placeholder="Enter a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="30"
            rows="8"
            className="w-full p-2 bg-zinc-100 rounded-md"
          ></textarea>
          <div className="flex justify-end gap-4 mb-4 md:mb-0">
            <button
              className="font-semibold rounded-[3px] py-2 text-gray-500 hover:bg-zinc-100 text-sm px-4"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="font-semibold rounded-sm py-2 text-white text-sm px-4  bg-[#f16232] hover:bg-[#cf5126]"
              type="submit"
              // onClick={handleClose}
              // bg-[#ff5722]
            >
              {currentItem.length > 0 ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default TaskForm;
