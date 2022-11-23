import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';
import { BiRadioCircleMarked } from 'react-icons/bi';

function TaskForm({ handleClose }) {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [category, selectCategory] = useState('Task');
  const [priority, selectPriority] = useState('');
  const [taskStatus, selectTaskStatus] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text, category, priority, taskStatus, description }));
    handleClose();
    setText('');
  };

  {
    /* <option value="Work Order">Work Order</option>
              <option value="Task">Task</option>
              <option value="Equipment Report">Equipment Report</option> */
  }

  return (
    <section>
      <h2 className="text-sm pl-1">Add a Task</h2>
      <form onSubmit={onFormSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Paint the Basement"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full text-xl font-semibold p-1"
          />
          <div className="flex justify-between text-sm gap-4">
            <select
              name="priority"
              id="priority-select"
              value={priority}
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
            className="w-full p-1"
          ></textarea>
          <div className="flex justify-between gap-4">
            <button
              className="font-extrabold rounded-[3px] w-full py-3 text-black bg-zinc-200"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="font-extrabold bg-[#6870fa] rounded-[3px] w-full py-3 text-white"
              type="submit"
              // onClick={handleClose}
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </section>
    // <section className="form form-sticky">
    //   <form onSubmit={onFormSubmit} className="task-form">
    //     <div className="form-group task-inputs">
    //       <input
    //         type="text"
    //         placeholder="Enter a task, work order, etc..."
    //         name="text"
    //         id="text"
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //       {/* <label htmlFor="category-select">Category</label> */}
    //       <select
    //         name="category"
    //         id="category-select"
    //         value={category}
    //         onChange={(e) => selectCategory(e.target.value)}
    //       >
    //         <option value="" disabled>
    //           Select a category
    //         </option>
    //         <option value="Work Order">Work Order</option>
    //         <option value="Task">Task</option>
    //         <option value="Equipment Report">Equipment Report</option>
    //       </select>
    //       {/* <label htmlFor="priority-select">Priority</label> */}
    //       <select
    //         name="priority"
    //         id="priority-select"
    //         value={priority}
    //         onChange={(e) => selectPriority(e.target.value)}
    //       >
    //         <option value="" disabled>
    //           Select a priority level
    //         </option>
    //         <option value="Low">Low</option>
    //         <option value="Medium">Medium</option>
    //         <option value="High">High</option>
    //       </select>
    //     </div>
    //     <div className="form-group">
    //       <button className="btn btn-block btn-task" type="submit">
    //         Add Task
    //       </button>
    //     </div>
    //   </form>
    // </section>
  );
}

export default TaskForm;

// {/* <section className="form form-sticky">
//       <form onSubmit={onFormSubmit} className="task-form">
//         <div className="form-group task-inputs">
//           <input
//             type="text"
//             placeholder="Enter a task, work order, etc..."
//             name="text"
//             id="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           {/* <label htmlFor="category-select">Category</label> */}
//           <select
//             name="category"
//             id="category-select"
//             value={category}
//             onChange={(e) => selectCategory(e.target.value)}
//           >
//             <option value="" disabled>
//               Select a category
//             </option>
//             <option value="Work Order">Work Order</option>
//             <option value="Task">Task</option>
//             <option value="Equipment Report">Equipment Report</option>
//           </select>
//           {/* <label htmlFor="priority-select">Priority</label> */}
//           <select
//             name="priority"
//             id="priority-select"
//             value={priority}
//             onChange={(e) => selectPriority(e.target.value)}
//           >
//             <option value="" disabled>
//               Select a priority level
//             </option>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <button className="btn btn-block btn-task" type="submit">
//             Add Task
//           </button>
//         </div>
//       </form>
//     </section> */}
