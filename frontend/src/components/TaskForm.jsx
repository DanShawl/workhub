import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';

function TaskForm() {
  const [text, setText] = useState('');
  const [category, selectCategory] = useState('');
  const [priority, selectPriority] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text, category, priority }));
    setText('');
  };

  return (
    <section className="form form-sticky">
      <form onSubmit={onFormSubmit} className="task-form">
        <div className="form-group task-inputs">
          <input
            type="text"
            placeholder="Enter a task, work order, etc..."
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* <label htmlFor="category-select">Category</label> */}
          <select
            name="category"
            id="category-select"
            value={category}
            onChange={(e) => selectCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Work Order">Work Order</option>
            <option value="Task">Task</option>
            <option value="Equipment Report">Equipment Report</option>
          </select>
          {/* <label htmlFor="priority-select">Priority</label> */}
          <select
            name="priority"
            id="priority-select"
            value={priority}
            onChange={(e) => selectPriority(e.target.value)}
          >
            <option value="" disabled>
              Select a priority level
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-task" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;

//  Categories
//    Work Order
//
//  Priority
