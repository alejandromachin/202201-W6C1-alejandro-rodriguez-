import styled from "styled-components";
import ToDo from "../ToDo/ToDo";

const List = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  height: 270px;
  width: 200px;

  background-image: url("images/hoja-papel.png");
  background-position: center;
  box-shadow: 10px 10px #0005, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  & .done {
    text-decoration: line-through;
  }
  & a {
    text-decoration: none;
    color: #000;
  }
  & li {
    width: 150px;

    list-style: none;

    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }
`;
const ToDoList = ({ tasks }) => {
  return (
    <List>
      <ul>
        {tasks.map((task) => (
          <ToDo key={task.id} task={task} />
        ))}
      </ul>
    </List>
  );
};

export default ToDoList;
