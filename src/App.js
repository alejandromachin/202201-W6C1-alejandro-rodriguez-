import ToDoList from "./components/ToDoList/ToDoList";
import fakedata from "./fakedata/fakedata";

function App() {
  return <ToDoList tasks={fakedata} />;
}

export default App;
