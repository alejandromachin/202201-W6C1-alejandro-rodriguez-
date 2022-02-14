const ToDo = ({ task: { name, id, done } }) => {
  return (
    <>
      <a href={name}>{name}</a>
    </>
  );
};
export default ToDo;
