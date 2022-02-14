import actionsTypes from "../actions/actionsTypes";

const tasksReducer = (currentTasks = [], action = {}) => {
  let newTasks;
  switch (action.type) {
    case actionsTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionsTypes.addTask:
      newTasks = [...currentTasks, action.task];
      break;
    default:
      newTasks = [...currentTasks];
  }
  return newTasks;
};

export default tasksReducer;
