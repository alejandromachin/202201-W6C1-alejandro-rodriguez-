import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import fakedata from "./fakedata/fakedata";

function App() {
  return (
    <>
      <ToDoForm />
      <ToDoList tasks={fakedata} />
    </>
  );
}

export default App;
