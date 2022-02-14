import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../redux/actions/actionsCreator";

const FormArticle = () => {
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
      <label htmlFor="task">Task: </label>
      <input
        type="text"
        id="task"
        value={formData.name}
        onChange={changeData}
        placeholder="To do"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FormArticle;
