import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTaskThunk } from "../../redux/thunks/tasksThunks";

const ToDoForm = () => {
  const blankFields = { name: "" };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };
  const createTask = (event) => {
    event.preventDefault();
    dispatch(addTaskThunk(formData));
    resetForm();
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
      done: false,
    });
  };

  return (
    <form onSubmit={createTask} noValidate autoComplete="off">
      <label htmlFor="name">Task: </label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={changeData}
        placeholder="To do"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
