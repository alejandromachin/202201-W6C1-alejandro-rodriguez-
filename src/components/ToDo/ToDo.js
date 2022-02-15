import { useDispatch } from "react-redux";

import { deleteTaskThunk } from "../../redux/thunks/tasksThunks";

const ToDo = ({ task }) => {
  const dispatch = useDispatch();
  const deleteTask = (event) => {
    event.preventDefault();
    dispatch(deleteTaskThunk(task.id));
  };

  return (
    <li>
      <a href={task.name}>{task.name}</a>
      <a href="delete" onClick={deleteTask}>
        Delete
      </a>
    </li>
  );
};
export default ToDo;
