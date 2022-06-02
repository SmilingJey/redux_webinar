import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks/actions";

const NewTaskForm = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addTask(inputValue))
     .then(() => setInputValue(""))
  };

  return (
    <form className="todolist-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todolist-form_input"
        placeholder="Введите текст задачи"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button type="submit" className="todolist-form_submit">
        Добавить
      </button>
    </form>
  );
};

export default NewTaskForm;
