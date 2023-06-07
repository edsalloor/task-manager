import { useEffect, useReducer } from 'react';
import taskReducer from '../store/reducers';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../store/actions';
import initialState from '../store/state';

const initializer = () =>
  JSON.parse(localStorage.getItem('tasks')) || [];

const useTasks = () => {
  const [allTasks, dispatchTask] = useReducer(taskReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }, [allTasks]);

  const handleAddTask = task => {
    const action = {
      type: ADD_TASK,
      payload: task
    };

    dispatchTask(action);
  };

  const handleDeleteTask = id => {
    const action = {
      type: DELETE_TASK,
      payload: id
    };

    dispatchTask(action);
  }

  const handleToggleTask = id => {
    const task = allTasks.find(task => task.id === id);
    const updatedTask = {
      ...task,
      completed: !task.completed
    };

    const action = {
      type: UPDATE_TASK,
      payload: updatedTask
    };

    dispatchTask(action);
  }

  return {
    allTasks,
    pendingTasks: allTasks.filter(task => !task.completed),
    handleAddTask,
    handleDeleteTask,
    handleToggleTask
  };
}

export default useTasks;
