import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasks/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  };

  return (
    <article className="todolist-item">
      <span className="todolist-item__text">{task.content}</span>
      <button className="todolist-item__del" onClick={handleDelete}></button>
    </article>
  );
};

export default Task;
