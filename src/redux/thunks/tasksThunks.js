import {
  addTaskAction,
  deleteTaskAction,
  loadTasksAction,
  toggleTaskAction,
} from "../actions/actionsCreator";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_URLAPI);
  const tasks = await response.json();
  dispatch(loadTasksAction(tasks));
};
export const addTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_URLAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  dispatch(addTaskAction(newTask));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_URLAPI}${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};

export const toggleTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_URLAPI}${task.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  dispatch(toggleTaskAction(newTask.id));
};
