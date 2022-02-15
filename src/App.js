import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

import { loadTasksThunk } from "./redux/thunks/tasksThunks";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
const App = () => {
  const tasksList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <>
      <PageContainer>
        <ToDoForm />
        <ToDoList tasks={tasksList} />
      </PageContainer>
    </>
  );
};

export default App;
