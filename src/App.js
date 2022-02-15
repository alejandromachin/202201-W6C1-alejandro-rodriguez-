import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

import { loadTasksThunk } from "./redux/thunks/tasksThunks";

const App = () => {
  const tasksList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <>
      <ToDoForm />
      <ToDoList tasks={tasksList} />
    </>
  );
};

export default App;
