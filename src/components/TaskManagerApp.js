import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import useTasks from '../hooks/useTasks';

const TaskManagerApp = () => {
  const { allTasks, pendingTasks, handleAddTask, handleDeleteTask, handleToggleTask } =
    useTasks();

  return (
    <>
      <div className="row">
        <div className="col-8">
          <h1>Task Manager App</h1>
        </div>
        <div className="col-4 d-flex justify-content-between align-self-center">
          <h2>
            Total: <small>{allTasks.length}</small>
          </h2>
          <h2>
            Pending: <small>{pendingTasks.length}</small>
          </h2>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-7">
          <TaskList
            tasks={allTasks}
            onDeleteTask={handleDeleteTask}
            onToggleTask={handleToggleTask}
          />
        </div>

        <div className="col-5">
          <AddTaskForm onAddTask={handleAddTask} />
        </div>
      </div>
    </>
  );
};

export default TaskManagerApp;
