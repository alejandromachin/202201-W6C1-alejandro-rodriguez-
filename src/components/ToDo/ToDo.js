import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  deleteTaskThunk,
  toggleTaskThunk,
} from "../../redux/thunks/tasksThunks";

const ToDo = ({ task }) => {
  const [isDone, setIsDone] = useState();

  const toggleDone = (event) => {
    event.preventDefault();
    dispatch(toggleTaskThunk(task));
    setIsDone(!isDone);
  };

  const dispatch = useDispatch();
  const deleteTask = (event) => {
    event.preventDefault();
    dispatch(deleteTaskThunk(task.id));
  };

  return (
    <li>
      <a className={isDone ? "done" : ""} href={task.name} onClick={toggleDone}>
        {task.name}
      </a>
      <a href="delete" onClick={deleteTask}>
        Delete
      </a>
    </li>
  );
};
export default ToDo;
