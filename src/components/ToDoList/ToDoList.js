import fakedata from "../../fakedata/fakedata";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  return (
    <ul>
      {fakedata.map((task) => (
        <ToDo key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ToDoList;
