import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import fakedata from "./fakedata/fakedata";
import { loadTasksAction } from "./redux/actions/actionsCreator";

function App() {
  const tasksList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksAction(fakedata));
  }, [dispatch]);

  return (
    <>
      <ToDoForm />
      <ToDoList tasks={tasksList} />
    </>
  );
}

export default App;
