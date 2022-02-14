import actionsTypes from "./actionsTypes";

export const loadTasksAction = (tasks) => ({
  action: actionsTypes.loadTasks,
  tasks,
});
