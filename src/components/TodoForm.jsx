import React, { useState } from "react";
import { useUpdateTodosContext } from "../contexts/UpdateTodosContext";

const TodoForm = ({ setTodos }) => {
  const [todo, setTodo] = useState("");
  //   const [todos, setTodos] = useState(useUpdateTodosContext());

  //   todos = useUpdateTodosContext();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      { todo: todo, completed: false, id: Date.now() },
      ...prev,
    ]);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo} action="" className="flex gap-0">
        <input
          type="text"
          placeholder="Write Todo..."
          className="p-1.5 rounded-l-lg placeholder:text-gray-400 placeholder:font-medium w-full bg-white/20 outline-none text-white"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          type="submit"
          className="p-1.5 rounded-r-lg text-white bg-green-600 hover:brightness-90 cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
