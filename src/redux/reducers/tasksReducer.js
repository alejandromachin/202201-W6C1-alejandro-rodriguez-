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
    case actionsTypes.deleteTask:
      newTasks = currentTasks.filter((task) => task.id !== action.id);
      break;
    case actionsTypes.toggleTask:
      newTasks = currentTasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return { ...task };
      });
      break;

    default:
      newTasks = [...currentTasks];
  }
  return newTasks;
};

export default tasksReducer;
