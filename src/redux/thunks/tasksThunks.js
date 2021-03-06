import {
  addTaskAction,
  deleteTaskAction,
  loadTasksAction,
  toggleTaskAction,
} from "../actions/actionsCreator";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(
    "https://alejandro-rodriguez-w6c1.herokuapp.com/todos/"
  );
  const tasks = await response.json();
  dispatch(loadTasksAction(tasks));
};
export const addTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(
    "https://alejandro-rodriguez-w6c1.herokuapp.com/todos/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }
  );
  const newTask = await response.json();
  dispatch(addTaskAction(newTask));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `https://alejandro-rodriguez-w6c1.herokuapp.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};

export const toggleTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(
    `https://alejandro-rodriguez-w6c1.herokuapp.com/todos/${task.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }
  );
  const newTask = await response.json();
  dispatch(toggleTaskAction(newTask.id));
};
