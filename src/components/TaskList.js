import TaskItem from './TaskItem';

const TaskList = ({ tasks=[], onDeleteTask, onToggleTask }) => {
  return (
    <ul className="list-group">
      {
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={ onDeleteTask }
            onToggleTask={ onToggleTask }
          />
        ))
      }
    </ul>
  )
};

export default TaskList;
