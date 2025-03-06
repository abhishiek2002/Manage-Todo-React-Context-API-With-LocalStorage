import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  UpdateTodosContextProvider,
  useUpdateTodosContext,
} from "./contexts/UpdateTodosContext";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  // const toggleComplete = (id) => {
  //   setTodos((prev) =>
  //     prev.map((prevTodo) =>
  //       prevTodo.id === id
  //         ? { ...prevTodo, completed: !prevTodo.completed }
  //         : prevTodo
  //     )
  //   );
  // };

  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem("todos")));
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <UpdateTodosContextProvider value={todos}>
      <div className="bg-[#172842] min-h-screen flex justify-center">
        <div className="mt-4 shadow-2xl shadow-black h-max px-4 py-2 w-9/10 max-w-[600px]  flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl text-center">
              Manage Your Todos
            </h1>
            {/* Todo Input Form */}
            <TodoForm setTodos={setTodos} />
          </div>

          <div className="flex flex-col gap-2">
            {/* Todos List */}
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoList todo={todo} setTodos={setTodos} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </UpdateTodosContextProvider>
  );
}

export default App;
