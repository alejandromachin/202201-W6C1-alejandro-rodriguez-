import { useState } from "react";

const ToDoForm = () => {
  const blankFields = { name: "" };
  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };
  const createTask = (event) => {
    event.preventDefault();

    resetForm();
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
      id: event.target.value,
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
