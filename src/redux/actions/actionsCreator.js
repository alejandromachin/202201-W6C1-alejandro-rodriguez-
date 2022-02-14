import actionsTypes from "./actionsTypes";

export const loadTasksAction = (tasks) => ({
  type: actionsTypes.loadTasks,
  tasks,
});

export const addTaskAction = (task) => ({
  type: actionsTypes.addTask,
  task,
});
