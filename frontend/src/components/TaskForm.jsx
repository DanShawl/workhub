import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, deleteTask } from '../features/tasks/taskSlice';

function TaskForm({ handleClose, currentItem, setCurrentItem }) {
  const [text, setText] = useState(
    currentItem.length > 0 ? currentItem[0].text : ''
  );
  const [description, setDescription] = useState(
    currentItem.length > 0 ? currentItem[0].description : ''
  );
  const [category, selectCategory] = useState('Task');
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

  {
    /* <option value="Work Order">Work Order</option>
              <option value="Task">Task</option>
              <option value="Equipment Report">Equipment Report</option> 
              
              */
  }

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
            className="w-full text-xl font-semibold p-1"
          />
          <div className="flex justify-between text-sm gap-4">
            <select
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
            </select>
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
          <div className="flex justify-between gap-4">
            <button
              className="font-extrabold rounded-[3px] w-full py-3 text-black bg-zinc-200 hover:bg-zinc-300"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="font-extrabold bg-[#6870fa] rounded-[3px] w-full py-3 text-white hover:bg-[#5058e5]"
              type="submit"
              // onClick={handleClose}
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
