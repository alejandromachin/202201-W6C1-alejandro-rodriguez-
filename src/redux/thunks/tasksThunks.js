import { loadTasksAction } from "../actions/actionsCreator";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(URL);
  const tasks = await response.json();

  dispatch(loadTasksAction(tasks));
};
