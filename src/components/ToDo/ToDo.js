import { useDispatch } from "react-redux";

import {
  deleteTaskThunk,
  toggleTaskThunk,
} from "../../redux/thunks/tasksThunks";

const ToDo = ({ task }) => {
  console.log(task);
  const dispatch = useDispatch();

  const toggleDone = (event) => {
    event.preventDefault();
    dispatch(toggleTaskThunk(task));
    console.log(task);
  };

  const deleteTask = (event) => {
    event.preventDefault();
    dispatch(deleteTaskThunk(task.id));
  };

  return (
    <li>
      <a
        className={task.done ? "done" : ""}
        href={task.name}
        onClick={toggleDone}
      >
        {task.name}
      </a>
      <a href="delete" onClick={deleteTask}>
        Delete
      </a>
    </li>
  );
};
export default ToDo;
