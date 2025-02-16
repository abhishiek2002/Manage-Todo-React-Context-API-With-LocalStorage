import { createContext, useContext } from "react";

const UpdateTodosContext = createContext([
  {
    todo: "Hello",
    completed: false,
    id: Date.now(),
  },
]);

export const UpdateTodosContextProvider = UpdateTodosContext.Provider;

export const useUpdateTodosContext = () => {
  return useContext(UpdateTodosContext);
};
