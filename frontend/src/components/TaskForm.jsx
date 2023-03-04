import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, deleteTask } from '../features/tasks/taskSlice';

import { BsFillCircleFill } from 'react-icons/bs';

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

  const [priorityColor, setPriorityColor] = useState(null);

  // console.log(priority === 'Low');

  // useEffect(() => {
  //   console.log(priorityColor);
  //   if (priority === 'Low') {
  //     console.log('low');
  //     setPriorityColor('green-400');
  //   }
  //   if (priority === 'Medium') {
  //     setPriorityColor('orange-400');
  //     console.log('medium');
  //   }
  //   if (priority === 'High') {
  //     setPriorityColor('red-400');
  //     console.log('high');
  //   }
  // }, [priority]);

  const [active, setActive] = useState(true);

  // const toggleTask = (taskPriority) => {
  //   selectPriority(taskPriority);
  //   console.log(priority);
  // };

  useEffect(() => {
    console.log(priority);
    setActive(true);
  }, [priority]);

  const toggleTask = (taskPriority) => {
    selectPriority(taskPriority);
    setActive(!active);
    console.log(priority);
  };

  // const toggleTask = (e) => {
  //   //   // e.persist();
  //   selectPriority(e.target.value);
  //   //   // if (active === true && priority !== e.target.value) {
  //   //   //   selectPriority(e.target.value);
  //   //   // } else {
  //   //   //   selectPriority(e.target.value);
  //   //   //   setActive(!active);
  //   //   // }
  //   //   console.log(priority);
  // };

  // console.log(priorityColor);
  // const onPriorityClick = (e, color) => {
  //   console.log(e.target.value);
  //   selectPriority(e.target.value);
  //   setPriorityColor(color);
  //   console.log(priorityColor);
  // };

  return (
    <section>
      <h2 className="text-sm pl-1">Add a Task</h2>
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
          <div className="text-[#4a4a4a]">
            <h2>What is the priority level?</h2>
            <div className="flex flex-grow justify-between gap-4">
              <input
                type="button"
                name="priority"
                placeholder="Low"
                id="priority-select"
                value={'Low'}
                onClick={() => selectPriority('Low')}
                className={` cursor-pointer hover:bg-zinc-300 bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'Low'
                    ? // ? 'border-green-300 bg-[#51ae4c76] hover:bg-[#51ae4c76]'
                      'border-[#6f6e6e2a] hover:bg-[#6f6e6e93] bg-[#6f6e6e93]'
                    : 'border-zinc-200'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="Medium"
                id="priority-select"
                value={'Medium'}
                onClick={() => selectPriority('Medium')}
                className={` cursor-pointer hover:bg-zinc-300 bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'Medium'
                    ? // ? 'border-[#faf55c] bg-[#c3be4181] hover:bg-[#c3be4181]'
                      'border-[#6f6e6e2a] hover:bg-[#6f6e6e93] bg-[#6f6e6e93]'
                    : 'border-zinc-200'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="High"
                id="priority-select"
                value={'High'}
                onClick={() => selectPriority('High')}
                className={` cursor-pointer hover:bg-zinc-300 bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'High'
                    ? // ? 'border-[#dd7575] bg-[#d75b5b83] hover:bg-[#ad414153]'
                      'border-[#6f6e6e2a] hover:bg-[#6f6e6e93] bg-[#6f6e6e93]'
                    : 'border-zinc-200'
                } font-semibold`}
              />
            </div>
          </div>
          {/* <div className="text-[#4a4a4a]">
            <h2>What is the task status?</h2>
            <div className="flex flex-grow justify-between gap-4">
              <input
                type="button"
                name="priority"
                placeholder="Low"
                id="priority-select"
                value={'Low'}
                onClick={() => selectPriority('Low')}
                className={` cursor-pointer hover:bg-zinc-300 bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'Low'
                    ? // ? 'border-green-300 bg-[#51ae4c76] hover:bg-[#51ae4c76]'
                      'border-[#6f6e6e2a] hover:bg-[#6f6e6e93] bg-[#6f6e6e93]'
                    : 'border-zinc-200'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="Medium"
                id="priority-select"
                value={'Medium'}
                onClick={() => selectPriority('Medium')}
                className={` cursor-pointer hover:bg-zinc-300 bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'Medium'
                    ? // ? 'border-[#faf55c] bg-[#c3be4181] hover:bg-[#c3be4181]'
                      'border-[#6f6e6e2a] hover:bg-[#6f6e6e93] bg-[#6f6e6e93]'
                    : 'border-zinc-200'
                } font-semibold`}
              />
              <input
                type="button"
                name="priority"
                placeholder="High"
                id="priority-select"
                value={'High'}
                onClick={() => selectPriority('High')}
                className={` cursor-pointer hover:bg-zinc-300 bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'High'
                    ? // ? 'border-[#dd7575] bg-[#d75b5b83] hover:bg-[#ad414153]'
                      'border-[#6f6e6e2a] hover:bg-[#6f6e6e93] bg-[#6f6e6e93]'
                    : 'border-zinc-200'
                } font-semibold`}
              />
            </div>
          </div> */}
          {/* <div>
            <h2>What is the task status?</h2>
            <div className="flex flex-grow justify-between gap-4">
              <input
                type="button"
                name="taskStatus"
                placeholder="Low"
                id="status-select"
                value={'Not Started'}
                // onClick={(e) => selectPriority(e.target.value)}
                // onClick={onPriorityClick(e, 'green-400')}
                // className={` bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                //   'border-' + priorityColor
                // } font-semibold`}
                onClick={(e) => toggleButton(e)}
                className={` bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'Low'
                    ? 'border-green-400'
                    : 'border-zinc-200'
                } font-semibold`}
              />
              <input
                type="button"
                name="taskStatus"
                placeholder="Medium"
                id="status-select"
                value={'In Progress'}
                // onClick={(e) => selectPriority(e.target.value)}
                onClick={(e) => toggleButton(e)}
                className={` bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'Medium'
                    ? 'border-orange-400'
                    : 'border-zinc-200'
                } font-semibold`}
              />
              <input
                type="button"
                name="taskStatus"
                placeholder="High"
                id="status-select"
                value={'Completed'}
                // onClick={(e) => selectPriority(e.target.value)}
                onClick={(e) => toggleButton(e)}
                className={` bg-zinc-200 flex-1 py-2 rounded-md flex items-center justify-center border-2 ${
                  active && priority === 'High'
                    ? 'border-red-400'
                    : 'border-zinc-200'
                } font-semibold`}
              />
            </div>
          </div> */}
          <div className="flex justify-between text-sm gap-4">
            {/* <select
              name="priority"
              id="priority-select"
              value={priority}
              // currentItem ? currentItem[0].priority :
              onChange={(e) => selectPriority(e.target.value)}
              className=" border border-zinc-200 p-2 w-full rounded-md text-zinc-500"
            >
              <option value="" disabled>
                Priority
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select> */}
            <select
              name="taskStatus"
              id="status-select"
              value={taskStatus}
              // currentItem ? currentItem[0].taskStatus :
              onChange={(e) => selectTaskStatus(e.target.value)}
              className=" border border-zinc-200 p-2 w-full rounded-md text-zinc-500"
            >
              <option value="" disabled>
                Status
              </option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
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
          <div className="flex justify-end gap-4">
            <button
              className="font-extrabold rounded-[3px] py-2 text-[#4a4a4a] hover:bg-zinc-100 text-sm px-4"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="font-extrabold rounded-[3px] py-2 text-white text-sm px-4  bg-zinc-800 hover:bg-[#0c0c0c]"
              type="submit"
              // onClick={handleClose}
              // bg-[#ff5722]
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
// bg-[#f16232]
// hover:bg-[#de5b34]
export default TaskForm;
