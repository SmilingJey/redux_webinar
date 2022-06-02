import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTasks } from "../redux/tasks/actions";
import TasksList from "./TasksList";

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(loadTasks());
   }, [dispatch])

  return (
    <div className="page">
      <section className="todolist">
        <TasksList />
      </section>
    </div>
  );
};

export default App;
