const TaskItem = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={
          task.completed
          ? "align-self-center text-decoration-line-through"
          : "align-self-center"
        }
        onClick={() => onToggleTask(task.id)}
      >
        {task.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  )
};

export default TaskItem;
