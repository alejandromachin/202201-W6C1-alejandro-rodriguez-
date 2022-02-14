import ToDo from "../ToDo/ToDo";

const ToDoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDo key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ToDoList;
