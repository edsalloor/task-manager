import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actions';

const taskReducer = (initialState = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...initialState, action.payload];
    case DELETE_TASK:
      return initialState.filter(task => task.id !== action.payload);
    case UPDATE_TASK:
      return initialState.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    default:
      return initialState;
  }
};

export default taskReducer;
