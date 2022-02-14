const ToDo = ({ task: { name, id, done } }) => {
  return (
    <li>
      <a href={name}>{name}</a>
    </li>
  );
};
export default ToDo;
