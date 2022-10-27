function CategoryCount({ tasks }) {
  return (
    <div className="category-blocks">
      <div className="category-count-block">
        <h6>Work Orders</h6>
        <p>{tasks.filter((task) => task.category === 'Work Order').length}</p>
      </div>
      <div className="category-count-block">
        <h6>Facility Tasks</h6>
        <p>{tasks.filter((task) => task.category === 'Task').length}</p>
      </div>
      <div className="category-count-block">
        <h6>Equipment Reports</h6>
        <p>
          {tasks.filter((task) => task.category === 'Equipment Report').length}
        </p>
      </div>
    </div>
  );
}

export default CategoryCount;
