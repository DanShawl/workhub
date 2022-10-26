import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';

function TaskForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask({ text }));
    setText('');
  };

  return (
    <section className="form">
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Change water filters"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
